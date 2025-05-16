'use client';

/* eslint-disable react/no-unescaped-entities */


import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { getDishaImages, getDiyaImages, getTrioImages, getOtherImages } from '@/lib/utils';

const galleryImages = getDishaImages();
// const trioImages = getTrioImages();
const allImages = [...getDiyaImages(), ...getDishaImages(), ...getTrioImages(), ...getOtherImages()];

export default function DiyaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* Gallery Section */}
      <section
        className="h-screen w-full flex flex-col items-center justify-center snap-start bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/photo-frame.jpg")' }}
      >
        <div className="relative w-[320px] h-[320px] z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-[240px] h-[340px] -top-[16px] left-[35px] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={galleryImages[currentIndex]}
                alt={`Memory ${currentIndex}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] top-1/2 -translate-y-1/2 bg-[#e0ac52] cursor-pointer hover:bg-[#e0ac52]/80 text-white rounded-full p-2 shadow-md z-20"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-5px] top-1/2 -translate-y-1/2 bg-[#e0ac52] cursor-pointer hover:bg-[#e0ac52]/80 text-white rounded-full p-2 shadow-md z-20"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Happy Birthday Letter Section */}
      <section className="bg-gray-800 h-screen w-full snap-start flex items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/90 bg-[url('/paper-texture.jpg')] bg-repeat border border-[#f5deb3] rounded-tr-4xl shadow-lg p-8 max-w-xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Dear Kuttush,</h2>
          <p className="text-sm text-gray-700 leading-relaxed text-justify w-100 px-5">
          Happpyy Birthdayyy Dishaaa!!! I'm so glad to have you in my life. We truly are the best of friends and I'm so so proud of you. You may not see the best in yourself always, but that doesn't mean others can't. I, for one, always can. Don't ever doubt yourself, my cutie. 
            <br />  
            <br />  
          I loveeee that you love to share the details of your day with me, and that you tell me everything that's on your mind, and that you consider me so close to be able to do that. I really realllllllyy love you. 
          <br />
          <br />
          And I love talking to youuuu about the world, history, culture, psychology and Unnati. lol. We're so alike sometimes, except in case of K3G, of course. (eyes roll)
          <br />
          <br />
          I know you will achieve all that you'll ever want, so you better believe that as well. 
          <br />
          <br />
          See you tomorrow, Kuttushhhh! 💖
          </p>
          <p className="mt-6 text-sm text-gray-500">— With all my heart, Sidd 💌</p>
        </motion.div>
      </section>

      {/* Infinite Memories */}
      <section className="h-screen w-full snap-start overflow-hidden flex flex-col gap-4 items-center justify-center px-2 bg-[#140a2e]">
  <h2 className="text-4xl mt-20 font-semibold text-white text-center">Infinite Memories</h2>

  <div className="flex flex-col gap-4 mt-10 w-full h-[80%] overflow-hidden">
  {Array.from({ length: 3 }).map((_, rowIndex) => {
  const direction = rowIndex % 2 === 0 ? 'left' : 'right';
  const scrollSpeed = 40 + rowIndex * 10;
  const imagesInRow = allImages.slice(rowIndex * 8, rowIndex * 8 + 12);

  return (
    <div
      key={rowIndex}
      className="relative overflow-hidden w-full h-32"
    >
      <div
        className={`absolute top-0 flex gap-2 w-[200%] h-full ${
          direction === 'left'
            ? `animate-scroll-left-${scrollSpeed}`
            : `animate-scroll-right-${scrollSpeed}`
        }`}
        style={{
          left: direction === 'left' ? '0%' : '-50%',
        }}
      >
        {[...imagesInRow, ...imagesInRow].map((src, i) => (
          <div
            key={i}
            className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={`Memory ${rowIndex}-${i}`}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
})}

  </div>
</section>
    </div>
  );
}

// Dear Kuttush,
// I'm so glad to have you in my life. We truly are the best of friends and I'm so so proud of you. You may not see the best in yourself always, but that doesn't mean others can't. I, for one, always can. Don't ever doubt yourself, my cutie. I loveeee that you love to share the details of your day with me, and that you tell me everything that's on your mind, and that you consider me so close to be able to do that. I really realllllllyy love you. I know you will achieve all that you'll ever want, so you better believe that as well. See you tomorrow, Kuttush! <3

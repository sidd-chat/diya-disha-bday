'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getDiyaImages, getDishaImages, getTrioImages, getOtherImages } from '@/lib/utils';

const diyaImg = getDiyaImages()[13];
const dishaImg = getDishaImages()[2];

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden font-sans relative">
      {/* Diya Section */}
      <motion.div
        className="group relative w-1/2 h-full bg-pink-600 hover:w-[60%] transition-all duration-700 ease-in-out overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
          <Image src={diyaImg} width={100} height={100} alt="Disha" className="w-64 h-64 rounded-4xl object-cover shadow-xl" />
          <h2 className="text-3xl mt-4 font-bold text-pink-100">Diya</h2>
          <p className="mt-2 text-sm text-pink-200">My Little Artist 🎨❤️</p>
          <Link href="/diya">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 cursor-pointer text-white font-bold px-6 py-2 rounded-full shadow-lg">
              Open Me!
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-0.5 bg-gradient-to-b from-black via-gray-800 to-black skew-y-3 z-20" />

      {/* Disha Section */}
      <motion.div
        className="group relative w-1/2 h-full bg-gray-900 hover:w-[60%] transition-all duration-700 ease-in-out overflow-hidden"
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
          <Image src={dishaImg} width={100} height={100} alt="Disha" className="w-64 h-64 rounded-4xl object-cover shadow-xl" />
          <h2 className="text-3xl mt-4 font-bold">Disha</h2>
          <p className="mt-2 text-sm text-gray-300">Boss Lady of the Feed 📱</p>
          <Link href="/disha">
            <button className="mt-6 bg-gray-800 hover:bg-gray-900 cursor-pointer font-bold text-white px-6 py-2 rounded-full shadow-lg hover:bg-gray-100">
              Noo! Open Me!
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

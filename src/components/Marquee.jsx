import { motion } from 'framer-motion'
import React from 'react'

export default function marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:12}} className='text-[20vw] font-bold mb-[4vw] leading-[12vw] tracking-tighter uppercase pt-5 pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:12}} className='text-[20vw] font-bold mb-[4vw] leading-[12vw] tracking-tighter uppercase pt-5 pr-20'>we are ochi</motion.h1>
      </div>
    </div> 
  )
}

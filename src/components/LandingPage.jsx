import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 '>

            {/* mid-body-structure */}
            <div className='textstructure mt-32 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker ' >
                            <div className='w-fit flex items-center overflow-hidden   '>
                                {index === 1 && (
                                    <motion.div initial={{width:0}} animate={{width:"7.5vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className='w-[7.5vw] h-[6vw] rounded-md  relative -bottom-[.7vw] overflow-hidden '>
                                        <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                    </motion.div>)}
                                <h1 className='pt-[1vw] -mb-[-.6vw] uppercase text-[8vw] leading-[6.6vw] tracking-tighter font-medium '>
                                    {item}
                                </h1>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* bottom-body-structure   */}
            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) =>
                    <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}

                <div className='start flex items-center gap-5'>
                    <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>
                        start the project
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full '>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage

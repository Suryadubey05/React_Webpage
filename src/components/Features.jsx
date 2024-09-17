import React, { useState } from 'react';
import { motion, useAnimate, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";

function features() {
    const cards = [useAnimation(), useAnimation()];
    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }

    return (

        <div className='w-full py-20  '>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl tracking-tight'>Featured projects</h1>
            </div>
            <div className='px-20 '>
                <div className="cards w-full flex gap-10 ">
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer  relative w-1/2 h-[75vh]  mt-20   ">
                        <div className=' card w-full h-full rounded-xl overflow-hidden '>
                            <h1 className='absolute  flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-bold z-[9] text-[14vh] leading-none tracking-tighter'>
                                {"CARDBOARD SPACESHIP".split('').map((item, index) =>
                                    <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1], delay: index*.01}} className='inline-block '>{item}</motion.span>)}
                            </h1>
                            <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
                        </div>
                    </motion.div>

                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2 h-[75vh]  mt-20   ">
                        <div className=' card w-full h-full rounded-xl overflow-hidden '>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold z-[9] text-[14vh] leading-none tracking-tighter'>
                                {"AH2 AND MATT HORN".split('').map((item, index) =>
                                    <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1], delay: index*.01}} className='inline-block '>{item}</motion.span>)}
                            </h1>
                            <img className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default features

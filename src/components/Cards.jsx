import React from 'react'

export default function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex items-center px-20 gap-5  '>
            <div className='cardContainer w-1/2 h-[65vh] '>
                <div className='card w-full relative h-full  bg-[#004D43] rounded-xl flex items-center justify-center '>
                    <img className='w-56' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute  px-5 py-1 rounded-full border-2 border-[#CDEA68] left-10 bottom-10 text-[#CDEA68]'>&copy;2019-2022</button>
                </div>

            </div>
            <div className='cardContainer flex gap-5 w-1/2 h-[65vh] '>
                <div className='card w-1/2 relative h-full  bg-[#212121] rounded-xl flex items-center justify-center '>
                    <img className='w-56' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute  px-5 py-1 rounded-full border-2 border-zinc-100 left-10 bottom-10 text-zinc-100'>RATING 5.0 ON CLUTCH</button></div>
                <div className='card w-1/2 relative h-full  bg-[#212121] rounded-xl flex items-center justify-center '>
                    <img className='w-36' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute  px-5 py-1 rounded-full border-2 border-zinc-100 left-10 bottom-10 text-zinc-100'>BUSINESS BOOTCAMP ALUMNI</button></div>

            </div>

        </div>
    )
}

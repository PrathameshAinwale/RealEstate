import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className='min-h-screen bg-cover mb-4 bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
            <Navbar />
            <motion.div 
            initial={{ opacity: 0 ,y:100}}
            transition={{duration:1.5}}
            whileInView={{ opacity: 1 ,y:0}}
            viewport={{once:true}}

            className='text-white text-center container  mx-auto py-4 px-6 md:px-20 lg:px-32'>
                <h2 className='text-5xl font-semibold sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20'>Explore homes that fits your Dreams</h2>
                <div className=' space-x-16 mt-12'>
                    <a href="#Projects" className=' py-4 px-8 rounded-md hover:font-bold border border-white font-normal'>Projects</a>
                    <a href="#Contact" className=' py-4 px-8 rounded-md bg-blue-700 hover:font-semibold font-normal'>Contact Us</a>
                </div>
            </motion.div>
        </div>
    )
}

export default Header

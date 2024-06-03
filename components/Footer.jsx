'use client';
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Footer = () => {
  return (
    <footer className="bg=soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
         variants={fadeIn('up',0.4)}
         initial='hidden'
         whileInView='show'
         viewport={{ once:false, amount: 0 }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            <div className="xl:w-[470px] mb-6 xl-6 xl:mb-0">
              <Link
              href='/'
              >
                <Image 
                  src='/footer/logo.svg'
                  width={80}
                  height={36}
                  alt=""
                  className="mb-2"
                  />
              </Link>
              <p className="text-lg leading-9">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem velit ex eum .
              </p>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href='/'>Home</Link>
                  </li>
                  <li>
                    <Link href='/'>Find Hotel</Link>
                  </li>
                  <li>
                    <Link href='/'>About Us</Link>
                  </li>
                  <li>
                    <Link href='/'>contact Us</Link>
                  </li>
                </ul>
              </div>
              
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+256xxxxxxxxx</li>
                  <li>info@hotely.com</li>
                  <li>hotely.com</li>
                 </ul>
              </div>



            </div>
          </div>
        </motion.div>
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">Copyright &copy; 2024. All Rights Reserved.</p>
          <Socials containerStyles='flex gap-x-4 text-black mx-auto xl:mx-0' />
        </div>
      </div>      
    </footer>
  )
}

export default Footer

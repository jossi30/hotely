'use client';
import Image from "next/image";
import {inView, motion} from 'framer-motion'
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";
import Stats from "./Stats";

const About = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    const [ref, inView] = useInView({
        threshold: !isMobile ? 0.5: null,
    });
    
    
  return ( <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
    <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row">
            <motion.div 
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4}}
                className='flex-1 relative'
                >
                  <Image src={'/about/img2.png'} width={559} height={721} alt='' />
            </motion.div>
            <motion.div 
                variants={fadeIn('left',0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4}}
                className='x1:max-w-[470px]'
                >
                <h2 className="h2 mb-[38px]">About Hotely</h2>
                <p>
                At j30-Hotely, we redefine the art of hospitality.Our hotels offer a perfect blend of modern elegance and timeless charm. Whether you are here for business, leisure, or a special occasion, we provide an unparalleled experience that will leave you with lasting memories.
                </p>
                <div className="my-5 xl:my-10 min-h-[35px]"> {inView && <Stats />} </div>
                <p className="mb-10 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam dolorum quam impedit obcaecati fugiat quos distinctio! Aspernatur mollitia provident, nesciunt ea consequuntur, ab explicabo laboriosam sequi vero illum harum.
                </p>
                <Button variant='accent'>Explore More</Button>
            
            </motion.div> 
        </div>
    </div>
  </section>
  )
}

export default About
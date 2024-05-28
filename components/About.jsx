'use client';
import Image from "next/image";
import {motion} from 'framer-motion'
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";
import Stats from "./Stats";

const About = () => {
  return <section className="py-12">
    <div className="container mx-auto">
        <div className="flex flex-col xl:flex-rom">
            <div className="flex=1 relative">
                <Image src={'/about/img2.png'} width={559} height={721} alt='' />
            </div>
            <d className="x1:max-w-[470px]">
                <h2 className="h2 mb-[38px]">About j30-Hotely</h2>
                <p>
                At j30-Hotely, we redefine the art of hospitality.Our hotels offer a perfect blend of modern elegance and timeless charm. Whether you are here for business, leisure, or a special occasion, we provide an unparalleled experience that will leave you with lasting memories.
                </p>
                <div className="my-5 xl:my-10 min-h-[35px]"> <Stats /> </div>
                <p className="mb-10 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam numquam dolorum quam impedit obcaecati fugiat quos distinctio! Aspernatur mollitia provident, nesciunt ea consequuntur, ab explicabo laboriosam sequi vero illum harum.
                </p>
                <Button variants='accent'>Explore More</Button>
            </d> 
        </div>
    </div>
  </section>
  
}

export default About

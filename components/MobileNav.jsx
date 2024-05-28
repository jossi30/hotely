'use client';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu size={36} className='text-white' />
        </SheetTrigger>
        <SheetContent side='left'>
          <div className='flex flex-col justify-between h-full p-12'>
            <Link href='/' className='mb-24'>
            <Image 
               src='./footer/logo.svg'
               width={90}
               height={46}
               alt=''
               priority
               />
            </Link>   
            <Nav
              containerStyles='text-black'
              listStyles='flex flex-col gap-y-6 text-xl'
            />
          <Socials containerStyles='flex gap-x-4 text-orange'/>
          </div>  
          
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav

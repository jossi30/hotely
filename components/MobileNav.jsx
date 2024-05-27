'use client';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react';
import Nav from './Nav';

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu size={36} className='text-white' />
        </SheetTrigger>
        <SheetContent side='left'>
            <Nav/>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav

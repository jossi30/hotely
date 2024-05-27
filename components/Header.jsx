   import Link from "next/link"
   import { Button } from "./ui/button"
import MobileNav from "./MobileNav"
    
    const Header = () => {
      return (
        <header>
          <div className="container mx-auto">header</div>
          <div className="xl:hidden absolute right-8 top-8">
            <MobileNav />
          </div>
        </header>
      )
    }
    
    export default Header
    
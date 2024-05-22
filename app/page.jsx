import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return  <main className='max-w-[1440px] mx-auto bg-white overflow-hidden'> 
            <Header />
            <Hero />
            <Footer /> 
            <div className='h-[4000px]'></div>  
     </main>
  
}

import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import Header from '../components/layout/header/Header'
import Footer from '@/components/layout/Footer'

export default function App({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    const offset = window.scrollY;
    const windowHeight = window.outerHeight;

    if (offset > windowHeight / 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className=" bg-blue-900">
      <div
        className="bg-cover bg-center bg-[url('/bg/bg10.jpg')] border-white border-r-0 sm:border-r-[1px] sm:mr-12 lg:mr-16 overflow-hidden "
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

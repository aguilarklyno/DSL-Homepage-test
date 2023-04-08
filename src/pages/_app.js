import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import Header from '../components/layout/header/Header'
import Footer from '@/components/layout/Footer'
import Hambergermenu from '@/components/layout/header/Hambergermenu'

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
        className="border-white border-r-0 sm:border-r-2 sm:mr-12 lg:mr-16 overflow-hidden "
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import Header from '../components/layout/header/Header';
import Footer from '@/components/layout/Footer';

export default function App({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    const offset = window.scrollY;
    const windowHeight = window.innerHeight;

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
    <div
      className="bg-cover bg-center bg-[url('/bg/bg04.jpg')]"
    >
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

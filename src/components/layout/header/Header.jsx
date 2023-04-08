import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import OverviewButton from './OverviewButton';
import ContactButton from './ContactButton';
import Hambergermenu from './Hambergermenu';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const scrollHandler = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return() => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
      <div
        className={`w-full fixed z-20 flex justify-between px-10 items-center text-black transition-colors duration-300 ${scrolled ? 'bg-yellow-300/90' : 'bg-white/90'
      }`}
      >
        <Link
        className='w-3/5 max-w-xs'
        href='/'
        >
          <div className='flex justify-start items-center'>
            <Image
              src="/logo.png"
              alt=""
              width={100}
              height={100}
              className='p-2'
              sizes="100vw"
              style={{
                maxWidth: '100px',
                width: '30%',
                height: 'auto',
              }}
            />
            <div className='hidden sm:block lg:text-lg font-thin '>
              Data Science League
            </div>
          </div>
        </Link>
        <Hambergermenu />
        <div className='hidden lg:flex justify-center items-center space-x-4'>
          {/* <Button links={links} /> */}
          <Link
            className='inline-flex justify-center hover:bg-white/80 rounded-md p-2'
            href="/"
          >
            ホーム
          </Link>
          <OverviewButton />
          <Link
            className='inline-flex justify-center hover:bg-white/80 rounded-md p-2'
            href="/news"
          >
            活動内容
          </Link>
          <ContactButton/>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg> */}

          {/* <Link
            className="p-2 bg-yellow-300 rounded-lg font-bold"
            href="../../login"
          >
            ログイン
          </Link> */}
        </div>
      </div>
  )
}

export default Header
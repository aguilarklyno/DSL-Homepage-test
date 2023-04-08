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
        className={`fixed z-20 flex justify-between pl-2 sm:pl-4 md:pl-8 items-center text-white transition-colors duration-300 w-full 
        `}
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
            <div className='block lg:text-lg font-thin '>
              Data Science League
            </div>
          </div>
        </Link>
        <Hambergermenu/>
      </div>
  )
}

export default Header
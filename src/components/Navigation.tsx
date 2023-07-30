'use client';

import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Link from 'next/link';

const links = [
  {
    title: 'Product Page',
    link: '#',
  },
  {
    title: 'The Faraday App',
    link: '#',
  },
  {
    title: 'About',
    link: 'https://about.faraday.africa/',
  },
  {
    title: 'Blog',
    link: '/blog',
  },
];

export default function Navigation() {
  const [hamClicked, setHamClicked] = useState(false);
  return (
    <nav className=' flex items-center justify-between container pt-3  font-semibold'>
      <div className='md:hidden flex justify-between items-center w-full '>
        <Link href={'/'} className='block'>
          <Logo className='w-[120px]' />
        </Link>

        <button className='' onClick={() => setHamClicked(!hamClicked)}>
          <span className='w-4 h-[2px] bg-black rounded-sm block'></span>
          <span className='w-4 h-[2px] bg-black rounded-sm block my-1'></span>
          <span className='w-3 h-[2px] bg-black rounded-sm block  ml-auto'></span>
        </button>

        {hamClicked && (
          <div className='fixed md:hidden w-full bottom-0 left-0 h-screen bg-[rgb(252,224,176)] bg-[linear-gradient(146deg,_rgba(252,224,176,1)_0%,_rgba(255,255,255,0.8847303029052023)_56%,_rgba(154,255,255,1)_100%)] flex justify-center flex-col'>
            <div className='container relative'>
              <div className='fixed top-0 w-[inherit] flex self-start justify-between items-center pt-3'>
                <Link href={'/'} className='block'>
                  <Logo className='w-[120px]' />
                </Link>

                <button className='' onClick={() => setHamClicked(!hamClicked)}>
                  <span className='w-4 h-[2px] bg-black rounded-sm block'></span>
                  <span className='w-4 h-[2px] bg-black rounded-sm block my-1'></span>
                  <span className='w-3 h-[2px] bg-black rounded-sm block  ml-auto'></span>
                </button>
              </div>

              <div className='my-auto h-auto'>
                <ul className='flex flex-col text-center gap-6 justify-between font-workSans'>
                  {links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href={'https://app.faraday.africa/signup'}
                  className='bg-brandColor text-white hover:bg-brandColor/95 rounded-full py-2 px-6 mt-5 block text-center max-w-[200px] mx-auto'
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className='hidden md:flex justify-between w-full items-center'>
        <Link href={'/'}>
          <Logo className='w-[120px]' />
        </Link>

        <ul className='flex gap-6 justify-between font-workSans'>
          {links.map((link) => (
            <li key={link.title}>
              <Link href={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <Link
          href={'https://app.faraday.africa/signup'}
          className='bg-brandColor text-white hover:bg-brandColor/95 rounded-full py-2 px-6'
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}

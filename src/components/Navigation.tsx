import React from 'react';
import Logo from '../images/logo.svg';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className='flex justify-between container pt-3'>
      <Image src={Logo} alt='faraday logo' className='w-[120px]' />

      <button className='py-2 px-6 text-[#05B85166]'>
        <a href='https://app.faraday.africa/login'>Login</a>
      </button>
    </nav>
  );
}

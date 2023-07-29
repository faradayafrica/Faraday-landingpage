import React from 'react';
import Logo from '../images/logo.svg';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='flex items-center justify-between container pt-3  font-semibold'>
      <Link href={'/'}>
        <Logo className='w-[120px]' />
      </Link>

      <ul className='flex gap-6 justify-between font-workSans'>
        <li className=''>Product Page</li>
        <li>The Faraday App</li>
        <li>
          <Link href='https://about.faraday.africa/'>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>

      <Link
        href={'https://app.faraday.africa/signup'}
        className='bg-brandColor text-white hover:bg-brandColor/95 rounded-full py-2 px-6'
      >
        Signup
      </Link>
    </nav>
  );
}

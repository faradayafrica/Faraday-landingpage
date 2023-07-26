import React from 'react';
import Logo from '../images/logo.svg';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='flex items-center justify-between container pt-3  font-bold'>
      <Link href={'/'}>
        <Logo className='w-[120px]' />
      </Link>

      <ul className='flex gap-6 justify-between font-workSans'>
        <li className='font-workSans'>Product Page</li>
        <li>The Faraday App</li>
        <li>About</li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>

      <button className='py-2 px-6'>
        <a href='https://app.faraday.africa/login'>Login</a>
      </button>
    </nav>
  );
}

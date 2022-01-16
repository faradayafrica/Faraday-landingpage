import React from "react";
import Logo from "../images/logo.svg";

export default function Navigation() {
  return (
    <nav className='flex justify-between container pt-3'>
      <img src={Logo} alt='faraday logo' className='w-[120px]' />

      <button className='border border-brandColor py-2 px-6 text-brandColor'>
        Login
      </button>
    </nav>
  );
}

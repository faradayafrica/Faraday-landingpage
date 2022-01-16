import React from "react";
import Logo from "../images/footerLogo.svg";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";
import Youtube from "../images/youtube.svg";

function Footer() {
  return (
    <footer className='container mt-24'>
      <div className='grid gap-11 grid-cols-2 md:grid-cols-4'>
        <div className='col-span-2 md:col-auto'>
          <h4 className='font-extrabold text-2xl'>
            Ask Questions, Get Help, Go Beyond.
          </h4>
          <p className='text-sm italic '>Built by students for students.</p>
        </div>
        <div className='col-start-2 md:col-auto'>
          <h5 className='font-medium'>Product</h5>
          <ul className='mt-1'>
            <li>Sign up</li>
            <li>Download app</li>
          </ul>
        </div>
        <div className='col-start-1 row-start-2 md:col-start-3 md:row-start-1'>
          <h5 className='font-medium'>Company</h5>
          <ul className='mt-1'>
            <li>About Faraday</li>
            <li>Advertise with us</li>
            <li>Terms of use</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className=''>
          <h5 className='font-medium '>Community</h5>
          <ul className='mt-1'>
            <li>All events</li>
            <li>Past events</li>
            <li>Gallery</li>
            <li>Social impact</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between items-center border-t border-t-[#CFD9DE] py-5 mt-12'>
        <img src={Logo} alt='faraday logo' />

        <div className='flex items-center gap-3'>
          <a href='#'>
            <img src={Github} alt='github' />
          </a>
          <a href='#'>
            <img src={Youtube} alt='youtube' />
          </a>
          <a href='#'>
            <img src={Twitter} alt='twitter' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

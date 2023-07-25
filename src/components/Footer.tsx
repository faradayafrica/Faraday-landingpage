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
            <span className='block'>Ask Questions,</span>
            <span className='block'>Get Help,</span>
            <span className='block'>Go Beyond.</span>
          </h4>
          <p className='text-sm italic '>Built by students for students.</p>
        </div>
        <div className='col-start-2 md:col-auto'>
          <h5 className='font-medium'>Product</h5>
          <ul className='mt-1'>
            <li className='text-[#3f3f41af] cursor-pointer'>Sign up</li>
            {/* <li>
              <a href=''>Download app</a>
            </li> */}
          </ul>
        </div>
        <div className='col-start-1 row-start-2 md:col-start-3 md:row-start-1'>
          <h5 className='font-medium'>Company</h5>
          <ul className='mt-1'>
            <li className='text-[#3f3f41af] cursor-pointer'>About Faraday</li>
            {/* <li>
              <a href=''>Advertise with us</a>
            </li> */}
            <li className='text-[#3f3f41af] cursor-pointer'>Terms of use</li>
            <li className='text-[#3f3f41af] cursor-pointer'>Privacy policy</li>
          </ul>
        </div>
        <div className=''>
          <h5 className='font-medium '>Community</h5>
          <ul className='mt-1'>
            <li>
              <a href='https://events.faraday.africa' rel='nooperner'>
                All events
              </a>
            </li>
            <li>
              <a href='https://events.faraday.africa/#past-events'>
                Past events
              </a>
            </li>
            <li>
              <a href='https://events.faraday.africa/gallery'>Gallery</a>
            </li>
            {/* <li>
              <a href=''>Social impact</a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className='flex justify-between items-center border-t border-t-[#CFD9DE] py-5 mt-12'>
        <a href='#'>
          <img src={Logo} alt='faraday logo' />
        </a>

        <div className='flex items-center gap-3'>
          <a href='https://github.com/faradayafrica'>
            <img src={Github} alt='github' />
          </a>
          <a href='https://www.youtube.com/channel/UCtNFJ9q1z52ICj3FqeyHjxw'>
            <img src={Youtube} alt='youtube' />
          </a>
          <a href='https://twitter.com/faradayafrica'>
            <img src={Twitter} alt='twitter' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

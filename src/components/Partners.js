import React from "react";
import BinaView from "../images/binaview.svg";
import Shortened from "../images/shortened.svg";
import Microsoft from "../images/microsoft.svg";
import Github from "../images/github-nau.svg";
import I4g from "../images/i4g.svg";

function Partners() {
  return (
    <section className='container my-24'>
      <h3 className='font-extrabold text-[28px] md:text-[48px] mb-5 text-center'>
        Some of our partners and friends
      </h3>

      <div className='flex flex-col md:flex-row gap-6 mt-14'>
        <img className='block mx-auto' src={BinaView} alt='bina view' />
        <img className='block mx-auto' src={Shortened} alt='Shortened' />
        <img
          className='block mx-auto'
          src={Microsoft}
          alt='Microsoft Learn Community, Unizik'
        />
        <img
          className='block mx-auto'
          src={Github}
          alt='Github NAU Community'
        />
        <img className='block mx-auto' src={I4g} alt='I4g' />
      </div>
    </section>
  );
}

export default Partners;

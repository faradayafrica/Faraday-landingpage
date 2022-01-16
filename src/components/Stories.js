import React, { useEffect, useState } from "react";
import Profile1 from "../images/profile1.png";
import Profile2 from "../images/profile2.png";
import Profile3 from "../images/profile3.png";

function Stories() {
  const [stories] = useState([
    {
      image: Profile1,
      testimony:
        "“Making friends and participating in school communities is as important as sitting for lectures and making A’s and Faraday just made it way more easier to make both work.”",
      student:
        "Kingsley, a GitHub Campus Expert UNIZIK and co-founder of Faraday",
      date: "24th, September, 2021",
    },
    {
      image: Profile2,
      testimony: "“The solution has no limits and can be generational. ”",
      student: "Chinazam , a student and Faraday Enthusiast",
      date: "5th, January, 2022",
    },
    {
      image: Profile3,
      testimony:
        "“Well, I really wanted to observe what the organizers were up to, and I was impressed. So many students need what you are offering.””",
      student: "Chinecherem , a tech leader at IEEE UNIZIK",
      date: "24th, September, 2021",
    },
  ]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setTimeout(() => {
      if (count === 2) {
        return setCount(0);
      }
      setCount(count + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className='bg-storiesBg text-white py-24'>
      <div className='container'>
        <h3 className='font-extrabold text-[28px] md:text-[48px] mb-4'>
          Student Stories
        </h3>

        <div className='flex flex-col md:flex-row max-w-[320px] gap-5 mx-auto md:max-w-[max-content]'>
          <div className='border-b border-b-[#CFD9DE] md:border-b-0 md:border-r  md:border-b-[#CFD9DE] md:pr-12 md:w- full'>
            <img
              src={stories[count].image}
              alt={stories[count].student}
              className='mx-auto max-w-[320px] md:mx-0'
            />
            <h4 className='font-extrabold text-[20px] my-3 md:max-w-[320px]'>
              Meet {stories[count].student}
            </h4>
          </div>
          <div className=''>
            <blockquote className='text-center md:text-left font-medium [line-height:_36px] md:text-[28px]'>
              {stories[count].testimony}
            </blockquote>
            <span className='text-center md:text-left text-[#CFD9DE] block mt-4'>
              {stories[count].date}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;

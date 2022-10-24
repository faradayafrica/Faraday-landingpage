import React, { useState } from "react";
// import CommImage from "../images/community-imagery.png";
import MakeFriends from "../images/make-friends.png";
import NeverStuck from "../images/never-stuck.png";
import Journey from "./Journey";
import Partners from "./Partners";
import Stories from "./Stories";

function Main() {
  const [data] = useState([
    {
      heading: "Ask Questions, Get Help, Go Beyond.",
      description:
        "Join an inclusive and diverse community of forward thinking students helping each other solve academic questions. Boost your learning and fast track your progress with help from other students using Faraday.",
      image: NeverStuck,
    },
    {
      heading: "Make new friends beyond your campus.",
      description:
        "Discover and connect with amazing scholars from around the globe in Faraday. You can collaborate, share, or just talk about your day with our in-app private chat.",
      image: MakeFriends,
    },
    {
      heading: "Never get stuck on course work",
      description:
        "Whether you’re blocked on a Mathematics question or got stuck on an history question, get answers suggested by the community.",
      image: CommImage,
    },
  ]);
  return (
    <main className=''>
      {data.map((info, i) => (
        <section
          key={i}
          className='container grid md:grid-cols-2 gap-6 my-24 md:px-16'
        >
          <img
            src={info.image}
            alt={info.heading}
            className={`mx-auto ${i === 1 ? "" : "md:order-1"}`}
          />
          <div className='my-auto'>
            <h2 className='font-extrabold text-[28px] md:text-[48px] mb-4'>
              {info.heading}
            </h2>
            <p className='text-lg [line-height:_30px] font-roboto'>
              {info.description}
            </p>
          </div>
        </section>
      ))}

      <Stories />
      <Partners />
      <Journey />
    </main>
  );
}

export default Main;

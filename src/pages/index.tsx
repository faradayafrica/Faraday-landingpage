import Navigation from '@/components/Navigation';
import CommImage from '../images/community-imagery.png';
import MakeFriends from '../images/make-friends.png';
import NeverStuck from '../images/never-stuck.png';
import Stories from '@/components/Stories';
import Partners from '@/components/Partners';
// import Journey from '@/images/Journey';
import Logo from '../images/footerLogo.svg';
import Twitter from '../images/twitter.svg';
import Github from '../images/github.svg';
import Youtube from '../images/youtube.svg';
import Image from 'next/image';
import { TypographyH1 } from '@/components/Typography';

const data = [
  {
    heading: 'Ask Questions, Get Help, Go Beyond.',
    description:
      'Join an inclusive and diverse community of forward thinking students helping each other solve academic questions. Boost your learning and fast track your progress with help from other students using Faraday.',
    image: NeverStuck,
  },
  {
    heading: 'Make new friends beyond your campus.',
    description:
      'Discover and connect with amazing scholars from around the globe in Faraday. You can collaborate, share, or just talk about your day with our in-app private chat.',
    image: MakeFriends,
  },
  {
    heading: 'Never get stuck on course work',
    description:
      "Whether you're blocked on a Mathematics question or stuck on an history question, get answers suggested by the community.",
    image: CommImage,
  },
];

export default function Home() {
  return (
    <>
      <header className={`bg-heroBg text-textBlack md:min-h- [80vh]  `}>
        <Navigation />
        <div className='heroBg pb-32 md:pb-72 pt-32 bg-heroImg bg-no-repeat bg-contain md:bg-auto [background-position:_center_bottom] md:min-h- [80vh]'>
          <div className='container'>
            <TypographyH1>
              Stay Connected with Students from all over the world.
            </TypographyH1>

            <a
              href='https://app.faraday.africa/signup'
              rel='noopener'
              className='block bg-brandColor text-white font-bold font-roboto mx-auto px-8 py-4 mt-8 md:mt-10 w-max'
            >
              Sign up now for free
            </a>
          </div>
        </div>
      </header>

      <main className=''>
        {data.map((info, i) => (
          <section
            key={i}
            className='container grid md:grid-cols-2 gap-6 my-24 md:px-16'
          >
            <Image
              src={info.image}
              alt={info.heading}
              className={`mx-auto ${i === 1 ? '' : 'md:order-1'}`}
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
        {/* <Journey /> */}
      </main>
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
              <li className='text-[#3f3f41af] cursor-pointer'>
                Privacy policy
              </li>
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
    </>
  );
}

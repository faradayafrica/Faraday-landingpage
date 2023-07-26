import Navigation from '@/components/Navigation';
import CommImage from '../images/community-imagery.png';
import MakeFriends from '../images/make-friends.png';
import NeverStuck from '../images/never-stuck.png';
import Stories from '@/components/Stories';
import Partners from '@/components/Partners';
import Image from 'next/image';
import { TypographyH1 } from '@/components/Typography';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Journey from '@/components/Journey';

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
      <Head>
        <title>Faraday Africa</title>
      </Head>

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
        <Journey />
      </main>

      <Footer />
    </>
  );
}

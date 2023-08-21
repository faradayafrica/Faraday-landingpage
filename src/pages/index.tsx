import Navigation from '@/components/Navigation';
import CommImage from '../images/community-imagery.png';
import MakeFriends from '../images/make-friends.png';
import Footer from '@/components/Footer';
import Head from 'next/head';
import SectionContainer from '@/components/SectionContainer';
import Hero from '@/components/homepage/Hero';
import Welcome from '@/components/homepage/Welcome';
import NeverStuck from '@/components/homepage/NeverStuck';
import AskQuestion from '@/components/homepage/AskQuestion';
import LatestPost from '@/components/homepage/LatestPost';
import WannaRead from '@/components/homepage/WannaRead';
import PeopleSaying from '@/components/homepage/PeopleSaying';

const data = [
  {
    heading: 'Ask Questions, Get Help, Go Beyond.',
    description:
      'Join an inclusive and diverse community of forward thinking students helping each other solve academic questions. Boost your learning and fast track your progress with help from other students using Faraday.',
    // image: NeverStuck,
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

      <Navigation />

      <div className='scrollbar-hide-scroll snap-y snap-mandatory overflow-y-scroll h-screen'>
        <SectionContainer className='relative bg-no-repeat bg-contain bg-bottom items-start'>
          <Hero />
        </SectionContainer>
        <SectionContainer className='relative'>
          <Welcome />
        </SectionContainer>
        <SectionContainer className='relative'>
          <NeverStuck />
        </SectionContainer>
        <SectionContainer className='relative'>
          <AskQuestion />
        </SectionContainer>
        <SectionContainer className='relative'>
          <LatestPost />
        </SectionContainer>
        <SectionContainer className='relative'>
          <WannaRead />
        </SectionContainer>
        <SectionContainer className='relative'>
          <PeopleSaying />
        </SectionContainer>
      </div>

      <Footer />
    </>
  );
}

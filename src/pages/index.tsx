import Navigation from '@/components/Navigation';
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
import AIBot from '@/components/homepage/AIBot';
import WhyNel from '@/components/homepage/WhyNel';
import JoinUs from '@/components/homepage/JoinUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Faraday Africa</title>
      </Head>

      <div className='scrollbar-hide-scroll snap-y snap-mandatory overflow-y-scroll h-screen'>
        <SectionContainer className='relative !p-0 bg-no-repeat bg-contain bg-bottom items-start'>
          <Hero />
        </SectionContainer>
        <SectionContainer className='relative'>
          <Welcome />
        </SectionContainer>
        <SectionContainer className='relative md:p-0'>
          <NeverStuck />
        </SectionContainer>
        <SectionContainer className='md:p-0'>
          <AIBot />
        </SectionContainer>
        <SectionContainer className='home-gradient'>
          <AskQuestion />
        </SectionContainer>
        <SectionContainer className='md:p-0'>
          <WhyNel />
        </SectionContainer>
        <SectionContainer className='home-gradient md:pr-0'>
          <LatestPost />
        </SectionContainer>
        <SectionContainer className='md:pr-0'>
          <PeopleSaying />
        </SectionContainer>
        <SectionContainer className='md:pr-0'>
          <WannaRead />
        </SectionContainer>

        <SectionContainer className='!min-h-fit'>
          <JoinUs />
        </SectionContainer>
        <SectionContainer className='bg-[url(/images/bg-pattern-footer.png)] !min-h-fit bg-[#333B47]'>
          <Footer isHome />
        </SectionContainer>
      </div>
    </>
  );
}

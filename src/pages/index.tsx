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
        <SectionContainer className='relative home-gradient'>
          <AskQuestion />
        </SectionContainer>
        <SectionContainer className='relative home-gradient md:pr-0'>
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

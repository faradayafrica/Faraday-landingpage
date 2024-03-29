import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ReadLikely from '@/components/ReadLikely';
import ReadMore from '@/components/ReadMore';
import { TypographyH1 } from '@/components/Typography';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Faraday Blog',
};

function BlogPage() {
  return (
    <>
      <Navigation />
      <main className='container my-14'>
        <TypographyH1>
          The Faraday <span className='text-brandColor'>Blog</span>
        </TypographyH1>

        <ReadLikely />

        <ReadMore />
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;

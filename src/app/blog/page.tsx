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
      <main className='container my-14'>
        <TypographyH1>
          The Faraday <span className='text-brandColor'>Blog</span>
        </TypographyH1>

        <ReadLikely />

        <ReadMore />
      </main>
    </>
  );
}

export default BlogPage;

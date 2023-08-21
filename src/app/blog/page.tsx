import ReadLikely from '@/components/blog/ReadLikely';
import ReadMore from '@/components/blog/ReadMore';
import { TypographyH1 } from '@/components/typography';
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

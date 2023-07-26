import React from 'react';
import { TypographyH3 } from './Typography';
import Tags from './Tags';
import BlogCard from './BlogCard';
import Smile from '@/images/smile.svg';

function ReadMore() {
  return (
    <div className='my-6 '>
      <div className='space-y-4'>
        <TypographyH3>
          More stuff you could read
          <Smile className='w-[35px]' />
        </TypographyH3>

        <Tags />
      </div>

      <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-4 mt-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default ReadMore;

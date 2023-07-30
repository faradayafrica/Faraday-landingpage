import React from 'react';
import { TypographyH2 } from './Typography';
import BlogCard from './BlogCard';
import Smile from '@/images/smile.svg';

function ReadLikely() {
  return (
    <div className='my-14'>
      <TypographyH2>
        Stuff we think you'd like to read
        <Smile className='w-[35px]' />
      </TypographyH2>

      <div className='flex flex-col md:flex-row gap-4 mt-[30px]'>
        <BlogCard featured />
        <BlogCard featured />
      </div>
    </div>
  );
}

export default ReadLikely;

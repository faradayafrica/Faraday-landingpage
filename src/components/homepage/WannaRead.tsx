import React from 'react';
import { TypographyH2 } from '../typography';
import BlogCard from '../blog/BlogCard';

const WannaRead = () => {
  return (
    <div>
      <TypographyH2>You might wanna read</TypographyH2>

      <div className='flex gap-2'>
        <BlogCard featured />
        <BlogCard featured />
        <BlogCard featured />
      </div>
    </div>
  );
};

export default WannaRead;

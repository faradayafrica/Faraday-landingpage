import React from 'react';
import { TypographyH2 } from '../typography';
import BlogCard from '../blog/BlogCard';

const WannaRead = () => {
  return (
    <div className='flex-1'>
      <div className='space-y-2'>
        <TypographyH2>You might wanna read</TypographyH2>
        <p>Our Blog</p>
      </div>

      <div className='scroll-bar flex overflow-x-auto gap-4 mt-12'>
        <BlogCard featured isHome />
        <BlogCard featured isHome />
        <BlogCard featured isHome />
        <BlogCard featured isHome />
        <BlogCard featured isHome />
        <BlogCard featured isHome />
      </div>
    </div>
  );
};

export default WannaRead;

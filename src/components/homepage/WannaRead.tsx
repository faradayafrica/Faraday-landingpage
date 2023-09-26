import React from 'react';
import { TypographyH2 } from '../typography';
import BlogCard from '../blog/BlogCard';

const WannaRead = () => {
  return (
    <div className='flex-1 w-full overflow-hidden'>
      <div className='space-y-2 text-center'>
        <TypographyH2>You might wanna read</TypographyH2>
        <p>Our Blog</p>
      </div>

      <div className='w-full max-w-full'>
        <div className='scroll-bar flex p-3 overflow-x-auto gap-4 w-full mt-12'>
          <BlogCard featured isHome />
          <BlogCard featured isHome />
          <BlogCard featured isHome />
          <BlogCard featured isHome />
          <BlogCard featured isHome />
          <BlogCard featured isHome />
        </div>
      </div>
    </div>
  );
};

export default WannaRead;

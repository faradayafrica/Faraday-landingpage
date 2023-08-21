import React from 'react';
import { TypographyH3 } from '../typography';
import Tags from '../Tags';
import BlogCard from './BlogCard';
import Smile from '@/images/smile.svg';
import TagIcon from '@/images/tab-icon.svg';
import Link from 'next/link';

function ReadMore() {
  return (
    <div className='my-6 '>
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <TypographyH3>
            More stuff you could read
            <Smile className='w-[35px]' />
          </TypographyH3>

          <Link href='/blog/tags' className='block md:hidden'>
            <button aria-label='all tag'>
              <TagIcon width={24} />
            </button>
          </Link>
        </div>

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

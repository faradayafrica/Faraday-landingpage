import React from 'react';
import { TypographyH1, TypographyH3 } from '@/components/Typography';
import BlogCard from '@/components/BlogCard';
import Tags from '@/components/Tags';
import SearchIcon from '@/images/search-icon.svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faraday - Tags',
};

function TagPage() {
  return (
    <>
      <main className='container my-14'>
        <TypographyH1>
          The Faraday <span className='text-brandColor'>Blog</span>
        </TypographyH1>

        <section className='grid md:grid-cols-12 gap-16 mt-20'>
          <div className='md:col-span-8 @container '>
            <TypographyH3>Tech</TypographyH3>

            <div className='@lg:grid-cols-2 grid md:grid-cols-2 gap-3 mt-6'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>

          <div className='md:col-span-4 hidden md:block'>
            <div className='flex bg-white rounded-md  items-center mb-6'>
              <input
                type='text'
                name=''
                id=''
                className='p-3 w-full outline-none rounded-md'
                placeholder='Search tags'
              />
              <button className='pr-3'>
                <SearchIcon width={24} />
              </button>
            </div>

            <Tags horizontal />
          </div>
        </section>
      </main>
    </>
  );
}

export default TagPage;

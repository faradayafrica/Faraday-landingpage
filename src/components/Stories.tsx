import React, { useEffect, useState } from 'react';
import { base } from '@/util';
import SkeletonLoader from '@/components/SkeletonLoader';
import Image from 'next/image';

function Stories() {
  const [stories, setStories] = useState<Array<any>>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    base('Social proof')
      .select({
        view: 'Grid view',
      })
      .eachPage((records: any, fetchNextPage) => {
        setStories(records);
        // console.log(records);
        fetchNextPage();
      });
  }, []);

  useEffect(() => {
    let interval: any;

    if (stories) {
      interval = setTimeout(() => {
        if (count === stories.length - 1) {
          return setCount(0);
        }
        setCount(count + 1);
      }, 10000);
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section className='bg-storiesBg text-white py-24'>
      <div className='container'>
        <h3 className='text-center font-extrabold text-[28px] md:text-[48px] md:text-left mb-4'>
          Student Stories
        </h3>
        {stories.length === 0 ? (
          <SkeletonLoader />
        ) : (
          <div className='flex flex-col md:flex-row max-w-[320px] gap-5 mx-auto md:max-w-[max-content]'>
            <div className='border-b border-b-[#CFD9DE] md:border-b-0 md:border-r  md:border-b-[#CFD9DE] md:pr-12 md:w- full'>
              <Image
                src={stories[count]?.fields?.profile_image[0].url}
                alt={stories[count]?.fields?.name}
                className='w-full mx-auto max-w-[190px] md:w-[600px] md:h-[400px] md:mx-0'
                loading='lazy'
                width={400}
                height={400}
              />
              <h4 className='font-extrabold text-[20px] my-3 text-center md:text-left md:max-w-[320px]'>
                Meet {stories[count]?.fields?.introduction}
              </h4>
            </div>
            <div className='font-roboto'>
              <blockquote className='text-center md:text-left font-medium [line-height:_36px] md:text-[28px]'>
                {stories[count]?.fields?.quote}
              </blockquote>
              <span className='text-center md:text-left text-[#CFD9DE] block mt-6 md:mt-10'>
                {stories[count]?.fields?.date}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Stories;

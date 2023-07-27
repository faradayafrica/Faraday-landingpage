import React, { useEffect, useState } from 'react';
import { base, workSans } from '@/util';
import SkeletonLoader from '@/components/SkeletonLoader';
import Image from 'next/image';
import { TypographyH3 } from './Typography';

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
        <TypographyH3 className='text-center font-extrabold text-[28px] md:text-[48px] md:text-left mb-4'>
          Student Stories
        </TypographyH3>
        {stories.length === 0 ? (
          <SkeletonLoader />
        ) : (
          <div className='flex flex-col justify-center md:grid md:grid-cols-12 md:flex-row  gap-12 md:max-w-[max-content]'>
            <div className='md:w-full mx-auto md:col-span-4'>
              <Image
                src={stories[count]?.fields?.profile_image[0].url}
                alt={stories[count]?.fields?.name}
                className=' mx-auto bg-cover  md:h-[300px] md:mx-0'
                // loading='lazy'
                width={400}
                height={300}
              />
              <h4
                className={`font-extrabold ${workSans.className} text-[20px] my-3 text-center md:text-left md:max-w-[320px]`}
              >
                Meet {stories[count]?.fields?.introduction}
              </h4>
            </div>
            <div
              className={`${workSans.className} md:col-span-8 border-t md:border-t-0 border-t-[#CFD9DE] md:border-b-0 md:border-l md:pl-12  md:border-b-[#CFD9DE]`}
            >
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

import Link from 'next/link';
import React from 'react';

type TagsProps = {
  horizontal?: boolean;
};

const tags = [
  'TECH',
  'PHILOSOPHY',
  'EDUCATION',
  'Food',
  'ARTS & CULTURE',
  'FASHION & BEAUTY',
];

function Tags({ horizontal }: TagsProps) {
  if (horizontal) {
    return (
      <div className='flex flex-col gap-3'>
        {tags.map((tag, i) => (
          <button
            key={i}
            className='border uppercase rounded-lg w-fit border-[#BFC9D2] px-3 py-1'
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className='gap-3 hidden md:flex'>
      {tags.map((tag, i) => (
        <button
          key={i}
          className='border uppercase rounded-lg border-[#BFC9D2] px-3 py-1'
        >
          {tag}
        </button>
      ))}

      <Link href='/blog/tags' className='block'>
        <button className='uppercase rounded-lg bg-[#101314] p-3 py-2 font-bold text-[#9AE2B3]'>
          All tags
        </button>
      </Link>
    </div>
  );
}

export default Tags;

import React from 'react';

const tags = [
  'TECH',
  'PHILOSOPHY',
  'EDUCATION',
  'TECH',
  'PHILOSOPHY',
  'EDUCATION',
];

function Tags() {
  return (
    <div className='flex gap-3'>
      {tags.map((tag, i) => (
        <button key={i} className='border rounded-lg border-[#BFC9D2] p-3 py-2'>
          {tag}
        </button>
      ))}

      <button className='uppercase rounded-lg bg-[#101314] p-3 py-2 font-bold text-[#9AE2B3]'>
        All tags
      </button>
    </div>
  );
}

export default Tags;

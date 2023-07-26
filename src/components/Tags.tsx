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
        <button key={i} className='border rounded-md border-[#BFC9D2] p-3 py-2'>
          {tag}
        </button>
      ))}
    </div>
  );
}

export default Tags;

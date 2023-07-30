import React from 'react';
import CopyIcon from '@/images/copy.svg';
import ShareIcon from '@/images/share-icon.svg';

function ShareLink() {
  return (
    <div className=''>
      <p className='font-semibold mb-2'>
        Would you like someone else to read this?
      </p>

      <div className='flex gap-3'>
        <div className='bg-[#ECECF0] max-w-sm flex items-center flex-1 rounded-lg'>
          <input
            type='url'
            value={'https://faraday.me/sodf98we'}
            className='p-3 w-full'
            disabled
          />
          <button className='mr-3'>
            <CopyIcon className='w-[20px]' />
          </button>
        </div>

        <button className='p-3 border bg-white border-[#BFC9D2] rounded-lg'>
          <ShareIcon className='w-[20px]' />
        </button>
      </div>
    </div>
  );
}

export default ShareLink;

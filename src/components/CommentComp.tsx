import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MenuIcon from '@/images/menu-icon.svg';

function CommentComp() {
  return (
    <div className={`comment-wrapper `}>
      <div className='content-wrapper'>
        <Link
          href={''}
          style={{ textDecoration: 'none' }}
          className='profile-img'
        >
          <Image
            src={'/images/blog/avatar.png'}
            style={{ objectFit: 'cover' }}
            alt=''
            width={24}
            height={24}
          />
        </Link>

        <div className='offset'>
          <div className='user'>
            <p className='author' style={{ margin: 0 }}>
              mikey
            </p>

            <p className='username'>@michaelangelo</p>
            <p className='time'>2h </p>

            <button className=''>
              <MenuIcon className='w-[24px]' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentComp;

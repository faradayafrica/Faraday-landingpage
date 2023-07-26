import React from 'react';
import { TypographyH2 } from './Typography';
import BlogCard from './BlogCard';

function ReadLikely() {
  return (
    <div>
      <TypographyH2>Stuff we think you'd like to read</TypographyH2>

<div className="flex gap-4">

      <BlogCard />
      <BlogCard />
</div>
    </div>
  );
}

export default ReadLikely;

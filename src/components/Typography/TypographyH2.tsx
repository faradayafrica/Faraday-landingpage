import { cn, workSans } from '@/util';
import React from 'react';

interface TypographyH2Props extends React.ComponentProps<'h2'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH2({ children, className }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        `text-grey-700 text-2xl font-extrabold  ${workSans.className} md:text-5xl`,
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;

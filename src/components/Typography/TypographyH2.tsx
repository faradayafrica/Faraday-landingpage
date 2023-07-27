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
        `flex gap-4 text-grey-700 text-lg font-extrabold  ${workSans.className} md:text-3xl`,
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;

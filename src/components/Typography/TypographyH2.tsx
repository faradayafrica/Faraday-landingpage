import { cn } from '@/util';
import React from 'react';

interface TypographyH2Props extends React.ComponentProps<'h2'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH2({ children, className }: TypographyH2Props) {
  return (
    <h2
      className={cn(
        'text-grey-700 text-3xl font-extrabold md:text-5xl font-workSans',
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TypographyH2;

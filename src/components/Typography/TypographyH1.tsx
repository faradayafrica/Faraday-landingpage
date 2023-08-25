import { cn, workSans } from '@/util';
import React from 'react';

interface TypographyH1Props extends React.ComponentProps<'h1'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        `text-[40px] md:text-[72px] ${workSans.className} font-extrabold`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;

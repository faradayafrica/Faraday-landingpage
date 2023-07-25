import { cn } from '@/util';
import React from 'react';

interface TypographyH1Props extends React.ComponentProps<'h1'> {
  className?: string;
  children: React.ReactNode;
}

function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1
      className={cn(
        'text-center text-[40px] md:text-[72px] font-extrabold max-w-[780px] mx-auto',
        className
      )}
    >
      {children}
    </h1>
  );
}

export default TypographyH1;

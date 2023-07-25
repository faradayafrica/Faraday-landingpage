import React from 'react';
import '@/styles/globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang='en'>
      <body className='bg-[rgb(252,224,176)] bg-[linear-gradient(146deg,_rgba(252,224,176,1)_0%,_rgba(255,255,255,0.8847303029052023)_56%,_rgba(154,255,255,1)_100%)] '>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

import Link from 'next/link';
import * as React from 'react';

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant: 'primary' | 'secondary' | 'tertiary';
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
  };

// type ButtonAsUnstyled = Omit<ButtonAsButton, 'as' | 'styleType'> & {
//   as: 'unstyled';
//   styleType?: BaseProps['styleType'];
// };

type ButtonAsLink = BaseProps & {
  as: 'link';
};

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externalLink';
  };

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink;

export default function Button({
  className,
  variant,
  as,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const variantStyle = {
    primary:
      'bg-brandColor text-white hover:bg-brandColor/95 rounded-full py-2 px-6 mt-5 block text-center max-w-[200px] mx-auto',
    secondary: '',
    tertiary: '',
  };

  if (as === 'link') {
    // don't pass unnecessary props to component
    return <Link href='' className={variantStyle[variant]} />;
  } else if (as === 'externalLink') {
    return (
      <a
        className={variantStyle[variant]}
        // provide good + secure defaults while still allowing them to be overwritten
        target='_blank'
        rel='noopener noreferrer'
        // {...rest}
      >
        {children}
      </a>
    );
  }
  // else if (props.as === 'unstyled') {
  //   const { className, styleType, as, children, ...rest } = props;
  //   return (
  //     <button className={className} {...rest}>
  //       {' '}
  //       {children}
  //     </button>
  //   );
  else {
    return (
      <button
        className={variantStyle[variant]}
        // {...rest}
      >
        {children}
      </button>
    );
  }
}

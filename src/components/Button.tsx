import React from 'react';

type ButtonProps = React.ComponentProps<'button'> &
  React.Component<'button'> & {
    children: React.ReactNode;
  };
type AnchorProps = React.ComponentProps<'a'> &
  React.Component<'a'> & {
    children: React.ReactNode;
  };

enum ButtonType {
  a = 'a',
  button = 'button',
}

type Props =
  | ({
      as: ButtonType.a;
    } & AnchorProps)
  | ({
      as: ButtonType.button;
    } & ButtonProps);

//   <a
//   href='https://app.faraday.africa/signup'
//   rel='noopener'
//   className='block bg-brandColor hover:bg-brandColor/95 rounded-full text-white font-bold font-roboto mx-auto px-8 py-4 mt-8 md:mt-10 w-max'
// >
//   Sign up now for free
// </a>

const Button = ({ children, as, ...props }: Props) => {
  return (
    <>
      {as === ButtonType.a && <a {...props}>{children}</a>}
      {as === ButtonType.button && <button {...props}>{children}</button>}
    </>
  );
};

export default Button;

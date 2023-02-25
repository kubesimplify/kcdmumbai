import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface HeadingProps extends ComponentPropsWithoutRef<'h1'> {
  children: ReactNode;
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={`whitespace-nowrap text-center text-2xl font-bold text-main-color sm:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;

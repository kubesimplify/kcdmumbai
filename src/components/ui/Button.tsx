import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface ButtonWithLinkProps extends ComponentPropsWithoutRef<'a'> {
  children: ReactNode;
}

const ButtonWithLink = ({
  children,
  className,
  ...props
}: ButtonWithLinkProps) => {
  return (
    <a
      className={`flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg bg-[#69B2B4] px-1 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-sm sm:text-lg ${className}`}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  );
};

export default ButtonWithLink;

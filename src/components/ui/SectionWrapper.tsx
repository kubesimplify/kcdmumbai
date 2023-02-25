import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface SectionWrapperProps extends ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  id?: string;
}
const SectionWrapper = ({
  children,
  id,
  className,
  ...props
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-center gap-8 pt-28 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;

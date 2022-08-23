import clsx from 'clsx';
import { FC, HtmlHTMLAttributes } from 'react';

// container used as a wrapper for most components
export const Container: FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
};

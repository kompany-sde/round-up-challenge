import clsx from 'classnames';
import { FC, HtmlHTMLAttributes } from 'react';

export const Container: FC<HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  return <div className={clsx('max-w-7xl mx-auto sm:px-6 lg:px-8 mb-8', className)}>{children}</div>;
};

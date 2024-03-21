import { FC } from 'react';
import classNames from 'classnames';

import { TButtonProps } from './types';

import s from './index.module.scss';

export const LinkBtn: FC<TButtonProps> = props => {
  const {
    className,
    size = 'm',
    color = 'default',
    variant = 'orthogonal',
    type = 'button',
    label,

    href,
    children,
  } = props;

  return (
    <a
      className={classNames(className, s.button, s[size], s[color], s[variant])}
      type={type}
      href={href}
    >
      {label && label}
      {children}
    </a>
  );
};

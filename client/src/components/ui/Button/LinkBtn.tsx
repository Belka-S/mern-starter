import { FC } from 'react';
import classNames from 'classnames';

import { TButtonProps } from './types';

import s from './index.module.scss';

export const LinkBtn: FC<TButtonProps> = props => {
  const {
    className,
    size = 'm',
    type = 'button',
    color = 'default',
    variant = 'orthogonal',
    label,

    href,
    children,
  } = props;

  return (
    <a
      href={href}
      type={type}
      className={classNames(s.button, s[size], s[color], s[variant], className)}
    >
      {label && label}
      {children}
    </a>
  );
};

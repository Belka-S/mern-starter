import { FC } from 'react';
import classNames from 'classnames';

import { TButtonProps } from './types';

import s from './index.module.scss';

export const Button: FC<TButtonProps> = props => {
  const {
    className,
    size = 'm',
    width = 'full',
    type = 'button',
    color = 'default',
    variant = 'orthogonal',
    label,

    onClick,
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      className={classNames(
        s.button,
        s[size],
        s[width],
        s[color],
        s[variant],
        className,
      )}
    >
      {label && label}
      {children}
    </button>
  );
};

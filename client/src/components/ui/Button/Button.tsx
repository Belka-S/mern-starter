import { FC } from 'react';
import classNames from 'classnames';

import { TButtonProps } from './types';

import s from './index.module.scss';

export const Button: FC<TButtonProps> = props => {
  const {
    className,
    size = 'm',
    color = 'default',
    variant = 'orthogonal',
    type = 'button',
    label,

    onClick,
    children,
  } = props;

  return (
    <button
      className={classNames(className, s.button, s[size], s[color], s[variant])}
      type={type}
      onClick={onClick}
    >
      {label && label}
      {children}
    </button>
  );
};

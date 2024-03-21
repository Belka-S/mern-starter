import { FC } from 'react';

import { IHeadingProps } from './types';
import Typography from './Typography';

export const H4: FC<IHeadingProps> = props => {
  const { className = '', fontWeight = 700, children } = props;

  return (
    <Typography className={className} el="h4" fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};

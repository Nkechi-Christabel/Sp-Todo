import React, { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
  return <div className='bg-primary'>{children}</div>;
};

import { FC } from 'react';

import { ThreeDots } from 'react-loader-spinner';

export const Loader: FC = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <ThreeDots
        height='80'
        width='80'
        radius='9'
        color='#1A341B'
        ariaLabel='three-dots-loading'
        visible={true}
      />
    </div>
  );
};

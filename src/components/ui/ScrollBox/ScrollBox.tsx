import { FC } from 'react';

import { clsx } from 'clsx';

import { ScrollBoxProps } from './ScrollBox.types';

export const ScrollBox: FC<ScrollBoxProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'scrollbar scrollbar-track-bgText scrollbar-thumb-green scrollbar-track-rounded-2xl scrollbar-thumb-rounded-2xl scrollbar-w-[5px] scrollbar-h-[5px] ',
        className,
      )}
    >
      {children}
    </div>
  );
};

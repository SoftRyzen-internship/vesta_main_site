import { FC } from 'react';

import clsx from 'clsx';

import { ScrollBoxProps } from './ScrollBox.types';

export const ScrollBox: FC<ScrollBoxProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'scrollbar scrollbar-h-[5px] scrollbar-w-[5px] scrollbar-thumb-rounded-2xl scrollbar-track-rounded-2xl scrollbar-thumb-green scrollbar-track-bgText ',
        className,
      )}
    >
      {children}
    </div>
  );
};

import React from 'react';

export const formatMainTitle = (title: string) => {
  return title.split('\n').map((word, index) => (
    <React.Fragment key={index}>
      {word}
      <br />
    </React.Fragment>
  ));
};

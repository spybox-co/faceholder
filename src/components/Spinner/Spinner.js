import React from 'react';

export function Spinner({ xsmall, small, medium, large, xlarge }) {
  const Size = xsmall
    ? 'xsmall'
    : null || small
    ? 'small'
    : null || medium
    ? 'medium'
    : null || large
    ? 'large'
    : null || xlarge
    ? 'xlarge'
    : null || (!large || !small || !medium ? 'medium' : null);

  return (
    <div className={`Spinner Spinner--${Size}`}>
      <div className="Spinner-circle" />
    </div>
  );
}

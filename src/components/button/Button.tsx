import React from 'react';
import classNames from 'classnames';
import './button.scss';

export type ButtonProps = {
  text?: 'string',
};

export const Button = ({ className, ...props }: React.ComponentProps<'button'>) => (
  <button
    type="button"
    {...props}
    className={classNames(className, 'button')}
  />
);

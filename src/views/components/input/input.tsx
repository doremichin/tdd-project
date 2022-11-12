import React from 'react';

interface IInput
  extends React.HTMLAttributes<HTMLInputElement>,
    React.HTMLProps<HTMLInputElement> {}

export function Input(props: IInput) {
  return (
    <input className="bg-black-200 rounded-4 px-2 py-1 text-12" {...props} />
  );
}

export default Input;

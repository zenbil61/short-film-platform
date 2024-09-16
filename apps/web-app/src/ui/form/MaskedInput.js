import './Input.scss';
import React from 'react';
import Input from './Input';
import { InputMask } from '@react-input/mask';

const MaskedInput = ({ mask, ...props }) => {
  // const modify = (input) => {
  //   console.log('xxx', input);
  //   return { mask: input[0] === '0' ? mask : undefined};
  // };
  return (
    <InputMask
      data='0'
      type='text'
      mask={mask}
      // modify={modify}
      replacement={{ _: /\d/ }}
      {...props}
    />
  );
};

export default MaskedInput;

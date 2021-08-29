import React, {ReactElement} from 'react';
import '../Button/button.css'
import {ButtonProps} from "../../types";

const Button: React.FC<ButtonProps> = ({onClickHandler, children}) => {
  return (
    <button
      className='btn'
      type='button'
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
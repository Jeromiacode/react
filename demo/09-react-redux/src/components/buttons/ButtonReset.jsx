import React from 'react';

function ButtonReset({onClick, disabled}) {

  return (
    <button onClick={onClick} disabled={disabled}>RĂ©initialiser</button>
  )
}


export default ButtonReset;
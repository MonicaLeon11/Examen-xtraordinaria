import React from 'react';

const BtnAñadir = ({ onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}
    
     style={{ width: '25px', height: '25px', fontSize: '13px',margin: '5px'}}>
      +
    </button>
  );
};

export default BtnAñadir;

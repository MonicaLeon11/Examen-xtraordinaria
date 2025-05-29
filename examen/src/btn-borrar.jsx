import React from 'react';

const BtnBorrar = ({ onClick }) => {
  return (
    <button onClick={onClick}   
    style={{ width: '25px', height: '25px', fontSize: '13px',margin: '5px'}}>

      -
    </button>
  );
};

export default BtnBorrar;
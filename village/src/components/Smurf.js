import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p>ID: {props.id} -- <strong>{props.height} tall</strong> - 
      <span> {props.age} smurf years old</span></p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


import React from 'react';

const SmurfbyID = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <p><strong>{props.height} tall</strong> - 
      <span> {props.age} smurf years old</span></p>
    </div>
  );
};

SmurfbyID.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfbyID;
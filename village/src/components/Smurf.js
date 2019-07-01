import React from 'react';
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <Link to={`/edit-smurf/${props.id}`}>
      <div className="Smurf">
        
        <h3>{props.name}</h3>
        <p><strong>{props.height} tall</strong> - 
        <span> {props.age} smurf years old</span></p>
      </div>
    </Link>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


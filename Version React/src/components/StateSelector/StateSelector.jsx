//SCSS
import './StateSelector.scss'

//React
import React from 'react'

//Import
import { states } from '../../data/states.js';

const StateSelector = ({ value, onChange }) => {
  return (
    <select name="state" id="state" value={value} onChange={onChange} className="stateSelect">
      <option value="">Select a State</option>
      {states.map((state, index) => (
        <option key={index} value={state.abbreviation}>{state.name}</option>
      ))}
    </select>
  );
};
  
  export default StateSelector;
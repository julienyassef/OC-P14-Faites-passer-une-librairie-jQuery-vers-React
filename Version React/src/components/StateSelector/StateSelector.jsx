//SCSS
import './StateSelector.scss'

//React
import React from 'react'

//Import
import { states } from '../../data/states.js';

const StateSelector = () => {
    return (
      <select name="state" id="state" className="stateSelect">
        {states.map((state, index) => (
          <option key={index} value={state.abbreviation}>{state.name}</option>
        ))}
      </select>
    );
  };
  
  export default StateSelector;
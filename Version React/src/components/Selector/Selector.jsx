//SCSS
import './Selector.scss'

//React
import React from 'react'


const Selector = ({ name, value, onChange, options, placeholder }) => {
  return (
      <select name={name} id={name} value={value} onChange={onChange} className="selector">
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
          ))}
      </select>
  );
};
  
  export default Selector;
//SCSS
import './Form.scss'

//react
import React from 'react';

//Import 
import StateSelector from '../StateSelector/StateSelector';


const EmployeeForm = () => {
  const saveEmployee = () => {
    // Logique pour sauvegarder l'employé
    console.log('Employee saved!');
  };

  return (
    <div className="employee-form">
      <form id="create-employee">

        <div className="employee-form__field-row">
          <div className="employee-form__field">
            <label htmlFor="first-name" className="employee-form__label">First Name</label>
            <input type="text" id="first-name" className="employee-form__input" />
          </div>
          <div className="employee-form__field">
            <label htmlFor="last-name" className="employee-form__label">Last Name</label>
            <input type="text" id="last-name" className="employee-form__input" />
          </div>
        </div>

        <div className="employee-form__field-row">
          <div className="employee-form__field">
            <label htmlFor="date-of-birth" className="employee-form__label">Date of Birth</label>
            <input id="date-of-birth" type="text" className="employee-form__input" />
          </div>
          <div className="employee-form__field">
            <label htmlFor="start-date" className="employee-form__label">Start Date</label>
            <input id="start-date" type="text" className="employee-form__input" />
          </div>
        </div>

        <fieldset className="employee-form__fieldset">
          <legend>Address</legend>

          <label htmlFor="street" className="employee-form__label">Street</label>
          <input id="street" type="text" className="employee-form__input" />

          <label htmlFor="city" className="employee-form__label">City</label>
          <input id="city" type="text" className="employee-form__input" />

          <label htmlFor="state" className="employee-form__label">State</label>
          <StateSelector className="employee-form__select"/>
    
          <label htmlFor="zip-code" className="employee-form__label">Zip Code</label>
          <input id="zip-code" type="number" className="employee-form__input" />
        </fieldset>

        <label htmlFor="department" className="employee-form__label">Department</label>
        <select name="department" id="department" className="employee-form__select">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick={saveEmployee} className="employee-form__button-save">Save</button>
    </div>
  );
};

export default EmployeeForm;

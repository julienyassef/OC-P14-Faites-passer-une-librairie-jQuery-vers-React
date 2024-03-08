//SCSS
import './Form.scss'

//react
import React, { useState } from 'react';

//Import 
import StateSelector from '../StateSelector/StateSelector';
import { useEmployee } from '../../provider/EmployeeContext'; // Assurez-vous que le chemin d'importation est correct
import ModaleEmployeeCreated from '../ModaleEmployeeCreated/ModaleEmployeeCreated';

const EmployeeForm = () => {

  const { saveEmployeeData } = useEmployee();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '', 
    zipCode: '',
    department: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveEmployee = (event) => {
    event.preventDefault();
    
    saveEmployeeData(employee);
    console.log('Employee saved!', employee);
    
    // Réinitialiser le formulaire
    setEmployee({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      startDate: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: '',
    });
    //modif le state modalOpen
    setIsModalOpen(true);
  };

  // fucntion fermeture modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="employee-form">
        <form id="create-employee" onSubmit={saveEmployee}>

          <div className="employee-form__field-row">
            <div className="employee-form__field">
              <label htmlFor="first-name" className="employee-form__label">First Name</label>
              <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleInputChange} className="employee-form__input" />
            </div>
            <div className="employee-form__field">
              <label htmlFor="last-name" className="employee-form__label">Last Name</label>
              <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleInputChange} className="employee-form__input" />
            </div>
          </div>

          <div className="employee-form__field-row">
            <div className="employee-form__field">
              <label htmlFor="date-of-birth" className="employee-form__label">Date of Birth</label>
              <input type="text" id="date-of-birth" name="dateOfBirth" value={employee.dateOfBirth} onChange={handleInputChange} className="employee-form__input" />
            </div>
            <div className="employee-form__field">
              <label htmlFor="start-date" className="employee-form__label">Start Date</label>
              <input type="text" id="start-date" name="startDate" value={employee.startDate} onChange={handleInputChange} className="employee-form__input" />
            </div>
          </div>

          <fieldset className="employee-form__fieldset">
            <legend className="employee-form__fieldset__legend">Address</legend>

            <label htmlFor="street" className="employee-form__label">Street</label>
            <input type="text" id="street" name="street" value={employee.street} onChange={handleInputChange} className="employee-form__input" />

            <label htmlFor="city" className="employee-form__label">City</label>
            <input type="text" id="city" name="city" value={employee.city} onChange={handleInputChange} className="employee-form__input" />

            {/* Assurez-vous que le StateSelector gère correctement les changements d'état, par exemple via une prop `onChange` que vous devez implémenter */}
            <label htmlFor="state" className="employee-form__label">State</label>
            <StateSelector name="state" value={employee.state} onChange={handleInputChange} className="employee-form__select"/>

            <label htmlFor="zip-code" className="employee-form__label">Zip Code</label>
            <input type="number" id="zip-code" name="zipCode" value={employee.zipCode} onChange={handleInputChange} className="employee-form__input" />
          </fieldset>

          <label htmlFor="department" className="employee-form__label">Department</label>
          <select name="department" id="department" value={employee.department} onChange={handleInputChange} className="employee-form__select">
            <option value="">Select Department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>

          <button type="submit" className="employee-form__button-save">Save</button>
        </form>
      </div>
      <ModaleEmployeeCreated isOpen={isModalOpen} handleClose={closeModal}/>
    </>
  );
};

export default EmployeeForm;

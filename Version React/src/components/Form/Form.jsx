//SCSS
import './Form.scss'
import '../ModalEmployeeCreated/ModalEmployeeCreated.scss'

//react
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Component
import Selector from '../Selector/Selector';

//Import
import { useEmployee } from '../../provider/EmployeeContext'; 
import Modal from 'jy-oc-p14-ma-bibliotheque-de-composants';

//Data
import { dataStates } from '../../data/dataStates';
import { dataDepartments } from '../../data/dataDepartments';


const EmployeeForm = () => {

  const { saveEmployeeData } = useEmployee();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

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

  // Liste des champs obligatoires
  const requiredFields = ['firstName', 'lastName', 'dateOfBirth', 'startDate', 'street', 'city', 'state', 'zipCode', 'department'];

  // regard dans fiedlError si le o'objet est rempli, si oui il renvoit la div cha champs rempli avec  le message dans FieldError
  const renderError = (fieldName) => {
    if (fieldErrors[fieldName]) {
      return <div className="error">{fieldErrors[fieldName]}</div>;
    }
    return null; 
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, fieldName) => {
    setEmployee(prevState => ({
      ...prevState,
      [fieldName]: date 
    }));
  };

  const saveEmployee = (event) => {
    event.preventDefault();

    let errors = {};
    let formIsValid = true;

    // vérifie si le champs et rempli et return message error plus formulaire non valid
    requiredFields.forEach(field => {
      if (!employee[field]) {
        formIsValid = false;
        errors[field] = `${field[0].toUpperCase() + field.slice(1)} is required`;
      }
    });

    //met à jour sle state fieldErrors avec le message d'erreur personnalisé au champs
    setFieldErrors(errors);

    // permet l'envoi du formulaire si il est rempli correctement
    if (!formIsValid) {
      return;
    }
    
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

    //réintialiser le state après soumission formualaire
    setFieldErrors({});
    
    //modif le state modalOpen
    setIsModalOpen(true);
  };

  // function fermeture modal
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <div className="employee-form">
        <form id="create-employee" onSubmit={saveEmployee}>

          <div className="employee-form__field-row">
              {/* Champ First Name */}
              <div className="employee-form__field">
                <label htmlFor="first-name" className="employee-form__label">First Name</label>
                <input type="text" id="first-name" name="firstName" value={employee.firstName} onChange={handleInputChange} className="employee-form__input" />
                {renderError('firstName')}
              </div>

              {/* Champ Last Name */}
              <div className="employee-form__field">
                <label htmlFor="last-name" className="employee-form__label">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={employee.lastName} onChange={handleInputChange} className="employee-form__input" />
                {renderError('lastName')}
              </div>
          </div>

          <div className="employee-form__field-row">
              {/* Champ Date of Birth */}
              <div className="employee-form__field">
                <label htmlFor="date-of-birth" className="employee-form__label">Date of Birth</label>
                <DatePicker 
                  selected={employee.dateOfBirth} 
                  onChange={(date) => handleDateChange(date, 'dateOfBirth')}
                  dateFormat="MM/dd/yyyy"
                  className="employee-form__input"
                  id="date-of-birth"
                  name="dateOfBirth"
                />
                {renderError('dateOfBirth')}
              </div>
              {/* Champ Start Date */}
              <div className="employee-form__field">
                <label htmlFor="start-date" className="employee-form__label">Start Date</label>
                <DatePicker 
                  selected={employee.startDate} 
                  onChange={(date) => handleDateChange(date, 'startDate')}
                  dateFormat="MM/dd/yyyy"
                  className="employee-form__input"
                  id="start-date"
                  name="start Date"
                />
                {renderError('startDate')}
              </div>
          </div>

          <fieldset className="employee-form__fieldset">
            <legend className="employee-form__fieldset__legend">Address</legend>

            {/* Champ Street */}
            <label htmlFor="street" className="employee-form__label">Street</label>
            <input type="text" id="street" name="street" value={employee.street} onChange={handleInputChange} className="employee-form__input" />
            {renderError('street')}
   
            {/* Champ City */}
            <label htmlFor="city" className="employee-form__label">City</label>
            <input type="text" id="city" name="city" value={employee.city} onChange={handleInputChange} className="employee-form__input" />
            {renderError('city')}

            {/* Champ State */}
            <label htmlFor="state" className="employee-form__label">State</label>
            <Selector
              name="state"
              value={employee.state}
              onChange={handleInputChange}
              options={dataStates.map(state => ({ value: state.abbreviation, label: state.name }))}
              placeholder="Select a State"
            />
            {renderError('state')}

            {/* Champ Zip Code */}
            <label htmlFor="zip-code" className="employee-form__label">Zip Code</label>
            <input type="number" id="zip-code" name="zipCode" value={employee.zipCode} onChange={handleInputChange} className="employee-form__input" />
            {renderError('zipCode')}
          </fieldset>

            {/* Champ Department */}
            <label htmlFor="department" className="employee-form__label">Department</label>
            <Selector
              name="department"
              value={employee.department}
              onChange={handleInputChange}
              options={dataDepartments.map(dept => ({ value: dept.id, label: dept.name }))}
              placeholder="Select a Department"
            />
            {renderError('department')}


          <button type="submit" className="employee-form__button-save">Save</button>
        </form>
      </div>
      <Modal 
      isOpen={isModalOpen} 
      handleClose={closeModal}
      content="Employee Created!"
      escapeClose={true}
      closeOnClickOutside={true}
      disableScroll={true}
      centeredModal={true}
      modalClass = 'modal'
      contentClass = 'modal__content'
      linkCloseClass = 'modal__linkClose'
      closeClass = 'modal__close'
      />
    </>
  );
};

export default EmployeeForm;

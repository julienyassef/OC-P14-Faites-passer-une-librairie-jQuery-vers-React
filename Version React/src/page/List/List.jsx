//SCSS
import './List.scss'

//react
import React from 'react';
import { Link } from 'react-router-dom';

//Import
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import { employees } from '../../data/listEmployeeTest';


const List = () => {

  return (
    <div className="list">
      <h1 className="list__title">Current Employees</h1>
      <EmployeeTable employees={employees} />
      <Link to="/" className="list__link-home">Home</Link>
    </div>
  );
};

export default List;
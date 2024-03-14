//SCSS
import './List.scss'

//react
import React from 'react';
import { Link } from 'react-router-dom';

//Import
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';

const List = () => {

  const employees = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      startDate: "2022-03-01",
      department: "Sales",
      dateOfBirth: "1990-05-15",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2021-11-15",
      department: "Marketing",
      dateOfBirth: "1985-08-20",
      street: "456 Oak Ave",
      city: "Otherville",
      state: "NY",
      zipCode: "54321"
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      startDate: "2020-01-27",
      department: "Development",
      dateOfBirth: "1979-07-22",
      street: "789 Pine Rd",
      city: "Somewhere",
      state: "TX",
      zipCode: "67890"
    },
    {
      id: 4,
      firstName: "Bob",
      lastName: "Brown",
      startDate: "2019-04-20",
      department: "Research",
      dateOfBirth: "1988-11-11",
      street: "321 Elm St",
      city: "Elsewhere",
      state: "FL",
      zipCode: "98765"
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Davis",
      startDate: "2022-07-15",
      department: "Human Resources",
      dateOfBirth: "1992-03-05",
      street: "654 Maple Ave",
      city: "Anywhere",
      state: "WA",
      zipCode: "45678"
    }
  ];
  
  return (
    <div className="list">
      <h1 className="list__title">Current Employees</h1>
      <EmployeeTable employees={employees} />
      <Link to="/" className="list__link-home">Home</Link>
    </div>
  );
};

export default List;
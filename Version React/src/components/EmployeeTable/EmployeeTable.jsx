//scss
import './EmployeeTable.scss'

//React
import React, { useState, useMemo } from 'react';

//Components
import SortableHeaderTable from '../SortableHeaderTable/SortableHeaderTable';

const EmployeeTable = ({ employees}) => {
  //initilise l'etat de tri 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  //func tri avec clef colone et direction
  const onSort = (columnKey, direction) => {
    setSortConfig({ key: columnKey, direction });
  };
  
  //function tri table en utilsant useMemo pour memoriser le resultat du tri
  const sortedEmployees = useMemo(() => {
    if (!sortConfig.key) return employees;
    return [...employees].sort((a, b) => {
      let valA = a[sortConfig.key];
      let valB = b[sortConfig.key];
  
      // Convertir en nombre si numérique
      if (!isNaN(valA) && !isNaN(valB)) {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }
  
      // Convertir en dates si nécessaire
      if (Date.parse(valA) && Date.parse(valB)) {
        valA = new Date(valA);
        valB = new Date(valB);
      }
  
      if (valA < valB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (valA > valB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [employees, sortConfig]);
  

  return (
    <table className="listTable">
      <thead className="listTable__header">
        <tr >
          <SortableHeaderTable title="First Name" columnKey="firstName" onSortChange={onSort}/>
          <SortableHeaderTable title="Last Name" columnKey="lastName" onSortChange={onSort}/>
          <SortableHeaderTable title="Start Date" columnKey="startDate" onSortChange={onSort}/>
          <SortableHeaderTable title="Department" columnKey="department" onSortChange={onSort}/>
          <SortableHeaderTable title="Date of Birth" columnKey="dateOfBirth" onSortChange={onSort}/>
          <SortableHeaderTable title="Street" columnKey="street" onSortChange={onSort}/>
          <SortableHeaderTable title="City" columnKey="city" onSortChange={onSort}/>
          <SortableHeaderTable title="State" columnKey="state" onSortChange={onSort}/>
          <SortableHeaderTable title="Zip Code" columnKey="zipCode" onSortChange={onSort}/>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

//scss
import './EmployeeTable.scss'

//React
import React, { useState, useMemo } from 'react';

//Components
import SortableHeaderTable from '../SortableHeaderTable/SortableHeaderTable';
import PaginationControlTable from '../PaginationControlTable/PaginationControlTable';
import PaginationCountTable from '../PaginationCountTable/PaginationCountTable';
import PaginationNavigationTable from '../PaginationNavigationTable/PaginationNavigationTable';
import SearchBarTable from '../SearchBarTable/SearchBarTable';


const EmployeeTable = ({ employees}) => {
  //initilise l'etat de tri 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  //initialise le nbr d'employee affiché par page, de base 10
  const [perPage, setPerPage] = useState(10);
  //initilise la page actuel, de base 1
  const [currentPage, setCurrentPage] = useState(1);
  //initialise le state de recherche
  const [searchTerm, setSearchTerm] = useState('');
  

  //function tri avec clef colone et direction
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
  
  // fucntion pour afficher le nbr d'employee par page
  const handleChangePerPage = (value) => {
    setPerPage(value);
    setCurrentPage(1);// Réinitialiser à la première page à chaque changement de perPage
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filtrer  sur toute la liste d'employés triée
  const filteredEmployees = useMemo(() => {
    // Crée une expression régulière pour tester si les champs commencent par le terme de recherche
    const searchRegex = new RegExp(`^${searchTerm.toLowerCase()}`, 'i');
  
    return sortedEmployees.filter(employee => {
      // Conversion des dates et des codes postaux en chaînes pour la comparaison
      const dateOfBirthString = employee.dateOfBirth.toLowerCase();
      const startDateString = employee.startDate.toLowerCase();
  
      return searchRegex.test(employee.firstName.toLowerCase()) ||
             searchRegex.test(employee.lastName.toLowerCase()) ||
             searchRegex.test(employee.city.toLowerCase()) ||
             searchRegex.test(employee.state.toLowerCase()) ||
             startDateString.includes(searchTerm.toLowerCase()) ||
             dateOfBirthString.includes(searchTerm.toLowerCase()) ||
             employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
             employee.zipCode.toLowerCase().startsWith(searchTerm.toLowerCase());
    });
  }, [sortedEmployees, searchTerm]);
  
  // Calcul pour déterminer les éléments à afficher sur la page courante
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredEmployees.slice(indexOfFirstItem, indexOfLastItem);

  // calcul le nbr de page existantes selon le nbr d'employee affiché par page
  const totalPages = Math.ceil(sortedEmployees.length / perPage);

  
 
  return (
    <div className='wrapperTable'>
      <div className='wrapperPaginationHeader'>
      <PaginationControlTable onChange={handleChangePerPage}/>
      <SearchBarTable onSearch={(value) => setSearchTerm(value)}/>
      </div>
      <table className='listTable'>
        <thead>
          <tr>
            <th>
            <SortableHeaderTable title="First Name" columnKey="firstName" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Last Name" columnKey="lastName" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Start Date" columnKey="startDate" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Department" columnKey="department" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Date of Birth" columnKey="dateOfBirth" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Street" columnKey="street" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="City" columnKey="city" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="State" columnKey="state" onSortChange={onSort}/>
            </th>
            <th>
            <SortableHeaderTable title="Zip Code" columnKey="zipCode" onSortChange={onSort}/>
            </th>
          </tr>
        </thead>
        <tbody>
        {currentItems.map(employee => (
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
      <div className='wrapperPagination'>
        <PaginationCountTable currentPage={currentPage}  perPage={perPage} totalEntries={sortedEmployees.length} />
        <PaginationNavigationTable currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
      </div>
    </div>
  );
};

export default EmployeeTable;

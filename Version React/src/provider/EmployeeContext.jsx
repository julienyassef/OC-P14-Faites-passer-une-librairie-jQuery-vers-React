import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const EmployeeContext = createContext();

// Fonction pour utiliser notre contexte plus facilement
export const useEmployee = () => useContext(EmployeeContext);

// Création du Provider
export const EmployeeProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState({});

  const saveEmployeeData = (data) => {
    setEmployeeData(data);
    console.log('Employee Data Saved', data);
  };

  return (
    <EmployeeContext.Provider value={{ employeeData, saveEmployeeData }}>
      {children}
    </EmployeeContext.Provider>
  );
};

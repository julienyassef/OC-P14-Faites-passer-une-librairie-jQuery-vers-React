//CSS
import './App.scss'

//react
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Context
import { EmployeeProvider } from '../provider/EmployeeContext.jsx'

//import
import List from '../page/List/List';
import Home from '../page/Home/Home';

function App() {
  return (
    <EmployeeProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
}

export default App;


//Scss
import './PaginationControlTable.scss'

import React, { useState } from 'react';

const PaginationControlTable = ({ onChange }) => {
  const [perPage, setPerPage] = useState(10);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    setPerPage(value);
    onChange(value);
  };

  return (
    <div>
      <span>Show</span>
      <select value={perPage} onChange={handleChange}>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <span> entries</span>
    </div>
  );
};

export default PaginationControlTable;

//React
import React from 'react';

//SCSS
import './SortableHeaderTable.scss'; 

//Import
import ArrowSvg from '../../assets/arrow.svg';

const SortableHeaderTable = ({ title, columnKey, onSortChange }) => {
  return (
    <div className='sortableHeader'>
      <h2 className='sortableHeader__title'>{title}</h2>
      <div className='sortableHeader__arrow' >
        <img src={ArrowSvg} className='sortableHeader__arrow__ascending' onClick={() => onSortChange(columnKey, 'ascending')} alt="Arrow" />
      <img src={ArrowSvg} className='sortableHeader__arrow__descending' onClick={() => onSortChange(columnKey, 'descending')} alt="Arrow" />
      </div>
    </div>
  );
};

export default SortableHeaderTable;

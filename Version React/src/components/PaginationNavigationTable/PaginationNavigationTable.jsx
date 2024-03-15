//SCSS
import './PaginationNavigationTable.scss'

//React
import React from 'react';


const PaginationNavigationTable= ({ currentPage, totalPages, goToPage }) => {
    return (
        <div>
      <span
        className={currentPage <= 1 ? 'disabledLink' : 'enabledLink'}
        onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
        style={{ marginRight: '10px', cursor: currentPage > 1 ? 'pointer' : 'default' }}
      >
        Previous
      </span>
      <span
        className={currentPage >= totalPages ? 'disabledLink' : 'enabledLink'}
        onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
        style={{ cursor: currentPage < totalPages ? 'pointer' : 'default' }}
      >
        Next
      </span>
    </div>
      );
    };

export default PaginationNavigationTable
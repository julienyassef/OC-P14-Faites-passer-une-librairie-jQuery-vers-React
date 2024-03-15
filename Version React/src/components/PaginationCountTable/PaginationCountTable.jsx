//SCSS
import './PaginationCountTable.scss'

const PaginationCountTable= ({ currentPage, totalPages }) => {
    return <span className='paginationCount'>{currentPage} / {totalPages} pages</span>;
}
export default PaginationCountTable
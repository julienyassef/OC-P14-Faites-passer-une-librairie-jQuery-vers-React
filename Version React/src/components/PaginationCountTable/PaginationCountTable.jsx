//SCSS
import './PaginationCountTable.scss'

const PaginationCountTable= ({ currentPage, perPage, totalEntries }) => {
    //Calcule l'indice de la première entrée 
    const startIndex = (currentPage - 1) * perPage + 1;
    //Calcule l'indice de la dernière entrée à affiche
    const endIndex = Math.min(startIndex + perPage - 1, totalEntries);

  return (
    <div className='ShowingEntries'>
      Showing {Math.min(totalEntries, startIndex)} to {Math.min(endIndex, totalEntries)} of {totalEntries} entries
    </div>
  );
}
export default PaginationCountTable
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import s from './Pagination.module.scss';

interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    onPageChange(selected);
  };

  return (
    <ReactPaginate
      previousLabel={'< Назад'}
      nextLabel={'Далее >'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={s.pagination}
      pageClassName={s.page}
      activeClassName={s.active}
      nextClassName={s.next}
      previousClassName={s.prev}
      breakClassName={s.break}
      forcePage={currentPage}
    />
  );
};

export default Pagination;

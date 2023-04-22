import { Dispatch, SetStateAction } from 'react';

import paginationStyles from './pagination.module.scss';

interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) {
  function changePage(page: number) {
    setCurrentPage(page > 500 ? 500 : page);
  }

  return (
    <div className={paginationStyles.pagination}>
      <button
        className={currentPage > 1 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        Previous
      </button>
      <button
        className={currentPage > 4 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(1);
        }}
      >
        1
      </button>
      <button
        className={currentPage > 4 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(2);
        }}
      >
        2
      </button>
      {currentPage > 4 ? '. . .' : null}

      <button
        className={currentPage > 1 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        {currentPage - 1}
      </button>

      <button className={paginationStyles.current}>{currentPage}</button>

      <button
        className={
          currentPage + 1 <= totalPages && currentPage < 500
            ? ''
            : paginationStyles.none
        }
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        {currentPage + 1}
      </button>
      <button
        className={
          currentPage + 2 <= totalPages && currentPage < 499
            ? ''
            : paginationStyles.none
        }
        onClick={() => {
          changePage(currentPage + 2);
        }}
      >
        {currentPage + 2}
      </button>
      <button
        className={currentPage < 498 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(totalPages < 500 ? totalPages : 500);
        }}
      >
        {totalPages < 500 ? `... ${totalPages}` : `. . .500`}
      </button>
      <button
        className={currentPage < 500 ? '' : paginationStyles.none}
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

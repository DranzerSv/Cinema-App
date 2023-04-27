import { Dispatch, SetStateAction } from 'react';

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

  const show = 'text-steel font-oswald';

  return (
    <div className=" flex flex-row gap-3 justify-center items-center h-16">
      <button
        disabled={currentPage === 1}
        className={' text-fire font-oswald '}
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        Previous
      </button>
      <button
        className={currentPage > 4 ? show : 'hidden'}
        onClick={() => {
          changePage(1);
        }}
      >
        1
      </button>

      {currentPage > 4 ? '. . .' : null}

      <button
        className={currentPage > 1 ? show : 'hidden'}
        onClick={() => {
          changePage(currentPage - 1);
        }}
      >
        {currentPage - 1}
      </button>

      <button className={'border-fire border-2  h-7 w-7 ' + show}>
        {currentPage}
      </button>

      <button
        className={
          currentPage + 1 <= totalPages && currentPage < 500 ? show : 'hidden'
        }
        onClick={() => {
          changePage(currentPage + 1);
        }}
      >
        {currentPage + 1}
      </button>

      <button
        className={currentPage < 498 ? 'font-oswald ' : 'hidden'}
        onClick={() => {
          changePage(totalPages < 500 ? totalPages : 500);
        }}
      >
        {totalPages !== currentPage
          ? `... ${totalPages < 500 ? totalPages : 500}`
          : ''}
      </button>
      <button
        disabled={!(currentPage < 500 && currentPage < totalPages)}
        className={'text-fire font-oswald'}
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

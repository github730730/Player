import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import classNames from 'classnames';
import React from 'react';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    let pageNumbers: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage < 4) {
        pageNumbers = [1, 2, 3, '...', totalPages];
      } else if (currentPage > totalPages - 3) {
        pageNumbers = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      } else {
        pageNumbers = [1, '...', currentPage, '...', totalPages];
      }
    }

    return pageNumbers.map((number, index) =>
      number === '...' ? (
        <span key={index} className="mx-1">
          {number}
        </span>
      ) : (
        <button
          key={index}
          className={`subheading-sm-xs mx-1 h-6 w-6 rounded text-center ${
            number === currentPage
              ? 'bg-slate-700 text-white'
              : 'bg-gray-800 text-gray-300'
          }`}
          onClick={() => handlePageChange(number as number)}
        >
          {number}
        </button>
      )
    );
  };

  return (
    <div className="flex w-full items-center justify-center">
      <button
        className="mx-1 rounded bg-slate-800 py-1 text-slate-300"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon
          className={classNames(
            '!text-[24px]',
            currentPage === 1
              ? '!text-slate-500'
              : '!font-extrabold !text-white'
          )}
        />
      </button>
      {renderPageNumbers()}
      <button
        className="mx-1 rounded bg-slate-800 py-1 text-slate-300"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon
          className={classNames(
            '!text-[24px]',
            currentPage === totalPages
              ? '!text-slate-500'
              : '!font-extrabold !text-white'
          )}
        />
      </button>
    </div>
  );
};

export default Pagination;

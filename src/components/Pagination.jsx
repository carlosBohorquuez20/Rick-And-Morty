import React from 'react';
import '../App.css'

const Pagination = ({ totalPosts, postPage, setCurrentPage,
  currentPage, }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPage); i++) {
    pages.push(i);
  }

  return (
    <div className='numbers-pagination'>
      {pages.map((page, index) => (
        <button key={index}
          onClick={() => setCurrentPage(page)}
          className={page == currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
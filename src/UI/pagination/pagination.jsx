import React from 'react'
import { getPagesArray } from '../../utils/pages';

const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
        {pagesArray.map((p) => {
          return (
            <span
              key={p}
              onClick={() => changePage(p)}
              className={page === p ? "page page__current" : "page"}
            >
              {p}
            </span>
          );
        })}
    </div>
  )
}

export default Pagination

import React from 'react'

const Pagination = ({ jobPerPage, totalJobs, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav className="d-flex justify-content-center my-3">
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <button className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;

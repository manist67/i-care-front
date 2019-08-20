import React from 'react';
import '../styles/Pagination.scss';

function Pagination({totalPage , current, onPageChange = (i)=>{}}) {
    const createPagination = () => {
        const page = [];
        for(let i = 0 ; i < totalPage; i++) {
            page.push(
                <li key={i} onClick={onPageChange(i)}
                    className={i==current ? "active" : ""}>
                    {i+1}
                </li>
            )
        };

        return page;
    }

    return (
        <div className="pagination-wrapper">
            <ul>
                <li> &lt;&lt; </li>
                {createPagination()}
                <li> &gt;&gt; </li>
            </ul>
        </div>
    )
}

export default Pagination;
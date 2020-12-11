import ReactPaginate from 'react-paginate';
import styles from '../styles/Pagination.module.css';

export default function Pagination({
    currentPage,
    pageCount,
    handlePageClick,
    hrefBuilder
}) {
    return (
        <ReactPaginate
            initialPage={currentPage}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            disableInitialCallback={true}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
            containerClassName={styles.pagination}
            activeClassName={styles.active}
            previousClassName={styles.previous}
            nextClassName={styles.next}
            pageLinkClassName={styles.page}
            breakClassName={styles.break}
            disabledClassName={styles.disabled}
            hrefBuilder={hrefBuilder}
        />
    );
};
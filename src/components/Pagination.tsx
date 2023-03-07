import CustomLink from '@/components/Custom/CustomLink';

export type PaginationType = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ totalPages, currentPage }: PaginationType) => {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <CustomLink href={currentPage - 1 === 1 ? `/posts/` : `/posts/page/${currentPage - 1}`}>
            <button>Previous</button>
          </CustomLink>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <CustomLink href={`/posts/page/${currentPage + 1}`}>
            <button>Next</button>
          </CustomLink>
        )}
      </nav>
    </div>
  );
};

export default Pagination;

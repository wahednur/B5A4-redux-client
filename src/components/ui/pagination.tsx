import { Button } from "./button";

interface PaginationProps {
  page: number;
  total: number;
  limit: number;
  setPage: (page: number) => void;
}

export default function Pagination({
  page,
  total,
  limit,
  setPage,
}: PaginationProps) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <Button
        variant="outline"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <span className="px-3">
        {page} / {totalPages}
      </span>
      <Button
        variant="outline"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}

import Pagination from "@/components/ui/pagination";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import type { IBook } from "../../types/Types";
import { BookCard } from "./book-card";

export default function DisplayBook() {
  const [page, setPage] = useState(1);
  const limit = 9;

  const { data, isLoading } = useGetBooksQuery({ page, limit });

  const books = data?.data || [];
  const total = data?.meta?.total || 0;

  if (isLoading) {
    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        <ScaleLoader color="#1df9de" />
      </div>
    );
  }

  return (
    <div>
      <div className="container mt">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
          {books.map((book: IBook) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
        <Pagination page={page} total={total} limit={limit} setPage={setPage} />
      </div>
    </div>
  );
}

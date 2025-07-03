import { useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from "../../types/Types";
import { BookCard } from "./book-card";

export default function DisplayBoo() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const books = data;
  return (
    <div>
      <div className="container mt">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
          {books?.data.map((book: IBook) => (
            <BookCard key={book?._id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

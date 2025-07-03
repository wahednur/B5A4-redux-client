import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useGetBooksQuery } from "../../redux/api/baseApi";
import type { IBook } from "../../types/Types";

export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const booksData = data;
  if (isLoading) return <p>Loading .....</p>;
  console.log(booksData);
  return (
    <div>
      <div className="container mt">
        <h1 className="title text-center mb-10">Book list</h1>
        <div className="w-full bg-white/10 p-5 rounded-2xl">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Genre</TableHead>
                <TableHead className="text-right">ISBN</TableHead>
                <TableHead className="text-right">Copies</TableHead>
                <TableHead className="text-right">Availability</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {booksData.data.map((book: IBook) => (
                <TableRow key={book?._id}>
                  <TableCell>{book?.title}</TableCell>
                  <TableCell>{book?.author}</TableCell>
                  <TableCell>{book?.genre}</TableCell>
                  <TableCell>{book?.isbn}</TableCell>
                  <TableCell>{book?.copies}</TableCell>
                  <TableCell>
                    {book?.available ? "Available" : "Out of Stock"}
                  </TableCell>
                  <TableCell className="flex gap-2 text-white">
                    <Button className="bg-blue-500 cursor-pointer text-white hover:text-gray-600">
                      <Pencil />
                    </Button>
                    <Button className="bg-red-500 cursor-pointer text-white hover:text-gray-600">
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

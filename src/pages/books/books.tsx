import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  useDeleteBookMutation,
  useGetBooksQuery,
} from "../../redux/api/baseApi";
import type { IBook } from "../../types/Types";
export default function Books() {
  const { data, isLoading, isError } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const [deleteBook] = useDeleteBookMutation();
  const booksData = data;
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteBook(id).unwrap();
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        } catch (error) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  if (isLoading)
    return (
      <div className="w-full min-h-svh flex justify-center items-center">
        <ScaleLoader color="#1df9de" />
      </div>
    );
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
                <TableHead>ISBN</TableHead>
                <TableHead>Copies</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Actions</TableHead>
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
                    {book?.copies > 0 ? "Available" : "Unavailable"}
                  </TableCell>
                  <TableCell className="flex gap-2 text-white">
                    <Link
                      to={`/books/edit-book/${book?._id}`}
                      className="bg-blue-500 cursor-pointer text-white hover:text-gray-600 flex justify-center hover:bg-white items-center w-10 h-9 rounded-md"
                    >
                      <Pencil />
                    </Link>
                    <Button
                      onClick={() => handleDelete(book?._id)}
                      className="bg-red-500 cursor-pointer text-white hover:text-gray-600"
                    >
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

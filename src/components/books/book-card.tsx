import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";
import { Link } from "react-router";
import type { IBook } from "../../types/Types";
interface BookCardProps {
  book: IBook;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>
          <div className="flex gap-2 items-center mb-5">
            <User /> <p>{book.author}</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p>Genre: {book.genre}</p>
            <p>ISBN: {book.isbn}</p>
            <p>copies: {book.copies} Item Available</p>
            <p>status: {book.available} Item Available</p>
            <p>description: {book.description} Item Available</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2">
        <Link
          to={`/borrow/${book?._id}`}
          className="w-full cursor-pointer dark:bg-gray-100 dark:text-gray-800 rounded-md flex justify-center items-center py-2 font-bold text-white hover:opacity-90 duration-300 bg-gray-800"
        >
          Borrow Now
        </Link>
      </CardFooter>
    </Card>
  );
}

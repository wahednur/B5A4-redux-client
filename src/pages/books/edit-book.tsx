import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../../redux/api/baseApi";
import type { IGenre } from "../../types/Types";

const genres: IGenre[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

export default function EditBook() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id);
  const book = data?.data;
  const form = useForm();
  console.log(book);
  const [updateBook] = useUpdateBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await updateBook({
        id,
        body: data,
      }).unwrap();
      toast.success(`Updated book successfully`);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };
  useEffect(() => {
    if (book) {
      form.reset({
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        genre: book.genre,
        copies: book.copies,
      });
    }
  }, [book, form]);
  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className="container dark:bg-gray-900 dark:text-gray-200 text-gray-700 mt p-5 rounded-md">
      <h1 className="title text-center">Add book</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={book?.title}
                    placeholder="Enter Book Title"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={book?.author}
                    placeholder="Enter Book Author"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Isbn</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={book?.isbn}
                    placeholder="Enter Book Isbn"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={book?.genre}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    {genres.map((gen, idx) => (
                      <SelectItem key={idx} value={gen} className="w-full">
                        {gen}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    defaultValue={book?.copies}
                    type="number"
                    placeholder="Enter Book Copies"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Update Book</Button>
        </form>
      </Form>
    </div>
  );
}

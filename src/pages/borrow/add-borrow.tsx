import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { cn } from "../../lib/utils";
import {
  useBorrowBookMutation,
  useGetBookByIdQuery,
} from "../../redux/api/baseApi";

export default function AddBorrow() {
  const { id } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(id);
  const book = data?.data;
  const form = useForm();
  const [borrowBook] = useBorrowBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const bookId = book?._id;

      const borrowData = {
        bookId,
        quantity: Number(data.quantity),
        dueDate: new Date(data.dueDate).toISOString(), // format date
      };

      const res = await borrowBook(borrowData).unwrap();
      toast.success(`${book.title} borrowed successfully`, res);
      form.reset();
    } catch (error: any) {
      const msg =
        error?.data?.message ||
        error?.data?.error?.message ||
        error?.error ||
        "Something went wrong";
      toast.error(msg);
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
    <div>
      <div className="container mt bg-white/20 rounded-2xl p-10">
        <h1 className="title text-center">Borrow Book</h1>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="flex-1">
            <h2 className="text-3xl">Book Information</h2>
            <div className="flex flex-col space-y-3 mt-6">
              <p>Book Name: {book?.title}</p>
              <p>Author Name: {book?.author}</p>
              <p>Description: {book?.description}</p>
              <p>Available copies: {book?.copies}</p>
            </div>
          </div>
          <div className="flex-1">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Available copies</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter Book Copies"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Due Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-full" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            captionLayout="dropdown"
                            className="min-w-[250px]"
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Borrow Book</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

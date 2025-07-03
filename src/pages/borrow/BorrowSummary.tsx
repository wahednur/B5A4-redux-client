import { useGetBorrowSummaryQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export default function BorrowSummary() {
  const { data, isLoading, error } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <p className="text-center">Loading summary...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load summary</p>;

  const summary = data?.data || [];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">📚 Borrow Summary</h1>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Total Borrowed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {summary.map((item: any) => (
              <TableRow key={item.bookId}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.isbn}</TableCell>
                <TableCell>{item.totalBorrowed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

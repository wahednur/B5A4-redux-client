import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl: string = import.meta.env.VITE_SERVER_URL;
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books", "borrow"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["books", "borrow"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["books", "borrow"],
    }),
    getBorrowSummary: builder.query({
      query: () => "/borrow/summary",
      providesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = baseApi;

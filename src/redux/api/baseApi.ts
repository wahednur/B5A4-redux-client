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
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const { useGetBooksQuery, useCreateBookMutation } = baseApi;

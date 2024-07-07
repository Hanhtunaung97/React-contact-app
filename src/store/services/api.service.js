import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../lib/constant";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINTS,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("auth")) {
        headers.set(
          "authorization",
          `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
        );
      } else {
        headers.delete("authorization");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: "contact",
});

import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

const baseQuery = async (args, api, extraOptions) => {
  const rawFetchQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (header) => {
      const token = localStorage.getItem("token");
      if (token) {
        header.set("Authorization", `Bearer${token}`);
      }
      return header;
    },
  });
  const response = await rawFetchQuery(args, api, extraOptions);
  if (response.error) {
    const { status } = response.error;
    if (response === 401 || response === 403) {
    }
  }
  return response;
};

const fetchBaseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "api,",
  baseQuery: fetchBaseQueryWithRetry,
  tagTypes: ["TODO"],
  endpoints: () => ({}),
});

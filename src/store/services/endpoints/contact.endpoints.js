import { apiService } from "../api.service";

const contactEndpoints = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
      providesTags: "contact",
    }),
    getOneContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
      invalidatesTags: "contact",
    }),
    addContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: "contact",
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: "contact",
    }),
    removeContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: "contact",
    }),
  }),
});

export const {
  useGetContactsQuery,
  useGetOneContactQuery,
  useEditContactMutation,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactEndpoints;

import { apiService } from "../api.service";

const contactEndpoints = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
    }),
    getOneContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
    }),
    addContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
        method: "POST",
        body: formData,
      }),
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
    removeContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
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

import { apiService } from "../api.service";

const authEndpoints = apiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (dataLogin) => ({
        url: `/login`,
        method: "POST",
        body: dataLogin,
      }),
    }),
    register: builder.mutation({
      query: (dataReg) => ({
        url: `/register`,
        method: "POST",
        body: dataReg,
      }),
    }),
    getProfile: builder.query({
      query: () => ({
        url: `/user-profile`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetProfileQuery, useLoginMutation, useRegisterMutation } =
  authEndpoints;

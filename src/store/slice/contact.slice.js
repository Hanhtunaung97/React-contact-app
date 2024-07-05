import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    processing: (state) => {
      state.loading = true;
      state.data = null;
      state.error = null;
    },
    getAllContact: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    getSingleContact: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    addContact: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    editContact: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    deleteContact: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    issues: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});
export const {
  processing,
  issues,
  getAllContact,
  getSingleContact,
  editContact,
  deleteContact,
} = contactSlice.actions;
export default contactSlice.reducer;

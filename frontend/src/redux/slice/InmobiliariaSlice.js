import { createSlice } from "@reduxjs/toolkit";
import { getInmobiliaria, getInmobiliariaUnique } from '../actions/ActionInmobiliaria';

const initialState = {
  inmobiliarias: [],
  inmobiliaria: {},
  loading: false,
  error: null,
};

const InmobiliariaSlice = createSlice({
  name: "getRealState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInmobiliaria.pending, (state) => {
        state.inmobiliarias = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(getInmobiliaria.fulfilled, (state, action) => {
        state.inmobiliarias = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getInmobiliaria.rejected, (state, action) => {
        state.inmobiliarias = [];
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getInmobiliariaUnique.pending, (state) => {
        state.inmobiliaria = {};
        state.loading = true;
        state.error = null;
      })
      .addCase(getInmobiliariaUnique.fulfilled, (state, action) => {
        state.inmobiliaria = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getInmobiliariaUnique.rejected, (state, action) => {
        state.inmobiliaria = {};
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getInmobiliariaReducer = InmobiliariaSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './contactsInitialState';
// Імпортуємо операцію
import { fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // Додаємо обробку зовнішніх екшенів
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { initialState } from './contactsInitialState';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;

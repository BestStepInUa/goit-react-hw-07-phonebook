import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const errorHandler = (error, thunkAPI) =>
  thunkAPI.rejectWithValue(error.message);

axios.defaults.baseURL =
  'https://65c4ef04dae2304e92e3abe2.mockapi.io/phonebookAPI/v1';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    return errorHandler();
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      return data;
    } catch (error) {
      return errorHandler();
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return errorHandler();
    }
  }
);

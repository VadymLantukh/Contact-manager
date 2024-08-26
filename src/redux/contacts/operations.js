import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      await axios.post('/contacts', contact);
      toast.success('Contact add 😀');
      thunkAPI.dispatch(fetchContacts());
    } catch (error) {
      toast.error('Failed to add contact 😭');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`./contacts/${id}`);
      toast.success('Contact delete 👻');
      return id;
    } catch (error) {
      toast.error('Failed to delete 😢');
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

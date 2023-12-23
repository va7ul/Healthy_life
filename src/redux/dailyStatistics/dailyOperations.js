import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://healthy-life-backend-b6ck.onrender.com/api',
});

export const getDailyWater = createAsyncThunk(
  'dailyWaterStatistics/getDailyWater',
  async (_, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.get('/user/water-intake');
      console.log(response);
      if (response.data.waterIntakeRecord === null) {
        console.log('lskdjkdls');
        return {
          waterIntakeRecord: {
            value: 0,
            _id: '',
          },
        };
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'dailyWaterStatistics/addWater',
  async (water, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.post('/user/water-intake', water);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'dailyWaterStatistics/deleteWater',
  async (_id, thunkAPI) => {
    try {
      const { token } = thunkAPI.getState().auth;
      instance.defaults.headers['Authorization'] = `Bearer ${token}`;
      const response = await instance.delete('/user/water-intake', {
        data: { _id },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

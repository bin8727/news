import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchParams, fetchNewsData } from '../api/newsAPI';

interface Article {
  title: string;
  content: string;
  url: string;
  urlToImage: string;
};

export interface NewsState {
  news: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState = {
  news: [],
  status: 'idle',
  error: null
} as NewsState;

export const fetchAllNews = createAsyncThunk<Article[], FetchParams>(
  'news/fetchAllNews',
  async({query, fromDate, toDate}) => {
    const res = await fetchNewsData({query, fromDate, toDate});
    return res as Article[];
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.status = 'failed';
      })
  }
});

export default newsSlice.reducer;
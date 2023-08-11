import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../../types/News.ts";
import { getAllNews } from "../../http/API.ts";

interface IState {
  news: INews[];
  isFetched: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  news: [],
  isFetched: false,
  isLoading: false,
  error: ""
};

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled.type, (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
      state.isFetched = true;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchNews.pending.type, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchNews.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const fetchNews = createAsyncThunk("getNews", async (_, thinkAPI) => {
  const countToFetch = 100;
  return getAllNews(countToFetch, thinkAPI);
});

export default newsSlice.reducer;

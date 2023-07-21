import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsInstance } from "../../models/News.ts";
import axios from "axios";

interface IInitialState {
  news: NewsInstance[];
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  news: [],
  isLoading: false,
  error: ""
};

const newsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled.type, (state, action: PayloadAction<NewsInstance[]>) => {
      state.news = action.payload;
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
  try {
    const response = await axios.get<NewsInstance[]>("https://api.hnpwa.com/v0/newest/1.json");
    return response.data;
  } catch (error) {
    return thinkAPI.rejectWithValue("Something went wrong");
  }
});

export default newsSlice.reducer;

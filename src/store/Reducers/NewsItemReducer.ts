import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsInstance } from "../../models/News.ts";
import axios from "axios";
import { NewsItemInstance } from "../../models/NewsItem.ts";

interface IInitialState {
  newsDetailsItem: NewsItemInstance;
  isLoading: boolean;
  error: string;
}

const initialState: IInitialState = {
  newsDetailsItem: {
    id: 0,
    title: "",
    points: 0,
    user: "",
    time: 0,
    content: "",
    deleted: false,
    dead: false,
    type: "",
    url: "",
    domain: "",
    comments: [],
    level: 0,
    comments_count: 0
  },
  isLoading: false,
  error: ""
};

const newsItemSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsItemDetails.fulfilled.type, (state, action: PayloadAction<NewsItemInstance>) => {
      state.newsDetailsItem = action.payload;
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchNewsItemDetails.pending.type, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchNewsItemDetails.rejected.type, (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    //fetch comments
    builder.addCase(fetchNewsItemComments.fulfilled.type, (state, action: PayloadAction<NewsItemInstance>) => {
      state.newsDetailsItem.comments = action.payload.comments;
    });
    builder.addCase(fetchNewsItemComments.rejected.type, (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    });
  }
});

export const fetchNewsItemDetails = createAsyncThunk("getNewsItemDetails", async (id: number, thinkAPI) => {
  try {
    const response = await axios.get<NewsInstance[]>(`https://api.hnpwa.com/v0/item/${id}.json`);
    return response.data;
  } catch (error) {
    return thinkAPI.rejectWithValue("Something went wrong");
  }
});

export const fetchNewsItemComments = createAsyncThunk("getNewsItemComments", async (id: number, thinkAPI) => {
  try {
    const response = await axios.get<NewsInstance[]>(`https://api.hnpwa.com/v0/item/${id}.json`);
    return response.data;
  } catch (error) {
    return thinkAPI.rejectWithValue("Something went wrong");
  }
});

export default newsItemSlice.reducer;

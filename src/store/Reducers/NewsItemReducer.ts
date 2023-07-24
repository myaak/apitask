import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsItemInstance } from "../../types/NewsItem.ts";
import { getSingleItem } from "../../http/API.ts";

interface IInitialState {
  newsDetailsItem: NewsItemInstance;
  isFetched: boolean;
  isLoading: boolean;
  isCommentsLoading: boolean;
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
    deleted: true,
    dead: true,
    type: "",
    url: "",
    domain: "",
    comments: [],
    level: 0,
    comments_count: 0
  },
  isFetched: false,
  isLoading: false,
  isCommentsLoading: false,
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
      state.isFetched = true;
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
      state.newsDetailsItem.comments_count = action.payload.comments_count;
      state.isCommentsLoading = false;
    });
    builder.addCase(fetchNewsItemComments.pending.type, (state) => {
      state.isCommentsLoading = true;
      state.error = "";
    });
    builder.addCase(fetchNewsItemComments.rejected.type, (state, action: PayloadAction<string>) => {
      state.isCommentsLoading = false;
      state.error = action.payload;
    });
  }
});

// Ниже две одинаковые функции но не знаю как лучше назвать/сделать. Что комментарий, что ньюс айтем по одному принципу достаются

export const fetchNewsItemDetails = createAsyncThunk("getNewsItemDetails", async (id: number, thinkAPI) => {
  const response = await getSingleItem(id);
  if (typeof response === "object" && !(response instanceof Error)) {
    return response;
  } else {
    return thinkAPI.rejectWithValue("Something went wrong");
  }
});

export const fetchNewsItemComments = createAsyncThunk("getNewsItemComments", async (id: number, thinkAPI) => {
  const response = await getSingleItem(id);
  if (typeof response === "object" && !(response instanceof Error)) {
    return response;
  } else {
    return thinkAPI.rejectWithValue("Something went wrong");
  }
});

export default newsItemSlice.reducer;

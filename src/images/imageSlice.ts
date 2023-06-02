import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface image {
  images: Array<any>;
  loading: boolean;
}

type postData = any;

const initialState = {
  images: [],
  loading: false
} as image;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// First, create the thunk
export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  await timeout(5000);
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );
  return response.data as postData[];
});

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setPosts(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.images = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.images = payload;
    });
  }
});

export default imageSlice.reducer;

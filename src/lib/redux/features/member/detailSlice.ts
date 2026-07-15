import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { memberService } from '@/services/member/memberService';
import { DetailItem } from '@/services/member/memberService.types';

interface DetailState {
  data: DetailItem | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DetailState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchDetailPage = createAsyncThunk(
  'detail/fetchDetailPage',
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await memberService.getDetailPage(slug);
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch detail page');
    }
  }
);

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    resetDetailState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailPage.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDetailPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDetailPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetDetailState } = detailSlice.actions;
export default detailSlice.reducer;

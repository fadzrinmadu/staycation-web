import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { memberService } from '@/services/member/memberService';
import { LandingPageResponse } from '@/services/member/memberService.types';

interface MemberState {
  landingPage: LandingPageResponse | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MemberState = {
  landingPage: null,
  status: 'idle',
  error: null,
};

export const fetchLandingPage = createAsyncThunk(
  'member/fetchLandingPage',
  async (_, { rejectWithValue }) => {
    try {
      const response = await memberService.getLandingPage();
      return response;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch landing page');
    }
  }
);

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    resetMemberState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPage.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchLandingPage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.landingPage = action.payload;
      })
      .addCase(fetchLandingPage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { resetMemberState } = memberSlice.actions;
export default memberSlice.reducer;

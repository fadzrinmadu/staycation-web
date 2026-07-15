import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { memberService } from '@/services/member/memberService';
import { BookingRequest, DetailItem } from '@/services/member/memberService.types';

interface BookingFormState {
  item: DetailItem | null;
  nights: number;
  bookingStartDate: string;
  bookingEndDate: string; 
}

interface BookingState {
  request: BookingRequest | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  form: BookingFormState | null;
}

const initialState: BookingState = {
  request: null,
  status: 'idle',
  error: null,
  form: null,
};

export const submitBooking = createAsyncThunk(
  'booking/submitBooking',
  async (payload: BookingRequest, { rejectWithValue }) => {
    try {
      await memberService.postBooking(payload);
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to submit booking');
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setItemBookingState: (state, action: PayloadAction<BookingFormState>) => {
      state.form = { 
        ...(state.form as BookingFormState),
        ...action.payload,
      };
    },
    setBookingRequest: (state, action: PayloadAction<BookingRequest>) => {
      state.request = action.payload;
    },
    updateBookingRequestField: (
      state,
      action: PayloadAction<Partial<BookingRequest>>
    ) => {
      state.request = {
        ...(state.request as BookingRequest),
        ...action.payload,
      };
    },
    resetBookingState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBooking.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.request = action.meta.arg;
      })
      .addCase(submitBooking.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const {
  setItemBookingState,
  setBookingRequest,
  updateBookingRequestField,
  resetBookingState,
} = bookingSlice.actions;

export default bookingSlice.reducer;

import { apiClient } from "../apiClient";
import { DetailResponse, LandingPageResponse, BookingRequest, BookingResponse } from './memberService.types';

export const memberService = {
  getLandingPage: async (): Promise<LandingPageResponse> => {
    const { data } = await apiClient.get<LandingPageResponse>('/member/landing-page');
    return data;
  },
  
  getDetailPage: async (slug: string): Promise<DetailResponse> => {
    const { data } = await apiClient.get<DetailResponse>(`/member/detail-page/${slug}`);
    return data;
  },
  
  postBooking: async (payload: BookingRequest): Promise<BookingResponse> => {
    const formData = new FormData();
    
    formData.append('firstName', payload.firstName);
    formData.append('lastName', payload.lastName);
    formData.append('email', payload.email);
    formData.append('phoneNumber', payload.phoneNumber);
    formData.append('itemId', payload.itemId);
    formData.append('duration', String(payload.duration));
    formData.append('bookingStartDate', payload.bookingStartDate);
    formData.append('bookingEndDate', payload.bookingEndDate);
    formData.append('accountHolder', payload.accountHolder);
    formData.append('bankFrom', payload.bankFrom);
    formData.append('bankId', payload.bankId);
    formData.append('image', payload.image);
    
    const { data } = await apiClient.post<BookingResponse>(
      '/member/booking-page',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return data;
  } 
};

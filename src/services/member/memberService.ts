import { apiClient } from "../apiClient";
import { DetailResponse, LandingPageResponse } from './memberService.types';

export const memberService = {
  getLandingPage: async (): Promise<LandingPageResponse> => {
    const { data } = await apiClient.get<LandingPageResponse>('/member/landing-page');
    return data;
  },
  
  getDetailPage: async (slug: string): Promise<DetailResponse> => {
    const { data } = await apiClient.get<DetailResponse>(`/member/detail-page/${slug}`);
    return data;
  },
};

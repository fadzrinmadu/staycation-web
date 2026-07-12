import { apiClient } from "../apiClient";
import { LandingPageResponse } from './memberService.types';

export const memberService = {
  getLandingPage: async (): Promise<LandingPageResponse> => {
    const { data } = await apiClient.get<LandingPageResponse>('/member/landing-page');
    return data;
  },
};

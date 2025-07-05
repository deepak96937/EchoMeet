import { axiosInstance } from "../lib/axios";

export const signup = async (signupData) => {
  try {
    const response = await axiosInstance.post("/auth/signup", signupData);
    return response.data;
  } catch (error) {
    // Forward the error to be caught by React Query or caller
    throw error.response?.data || error;
  }
};

         
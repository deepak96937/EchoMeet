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

export const login = async (loginData) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginData);
    return response.data;
  } catch (error) {
    // Forward the error to be caught by React Query or caller
    throw error.response?.data || error;
  }
};



export const getAuthUser = async () => {
  const res = await axiosInstance.get("auth/me");
  return res.data;
}

export const completeOnboarding = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/onboarding", userData);
    return response.data;
  } catch (error) {
    // Forward the error to be caught by React Query or caller
    throw error.response?.data || error;
  }
};
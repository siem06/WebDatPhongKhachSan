import axios from "axios";

export const instance = axios.create({
  baseURL: "http://192.168.61.232:3001",
});
export const login = async (email, password) => {
  try {
    const response = await instance.post("/accounts/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const register = async (email, phone, password, repassword) => {
  try {
    const response = await instance.post("/accounts", {
      email,
      phone,
      password,
      repassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const verify = async (otp, email) => {
  try {
    const response = await instance.put("/accounts/verify", {
      otp,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const forgot = async (email) => {
  try {
    const response = await instance.post("/accounts/forgot", {
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const verifPassword = async (email, otp, password, repassword) => {
  try {
    const response = await instance.post("/accounts/verifPassword", {
      email,
      otp,
      password,
      repassword,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

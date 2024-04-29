import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
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
    const response = await instance.post("/accounts/register", {
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
    const response = await instance.post("/accounts/verify", {
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
export const verifPassword = async (email, otp) => {
  try {
    const response = await instance.post("/accounts/verifyPassword", {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const resetPassword = async (newpass, renewpass) => {
  try {
    const response = await instance.post("/accounts/resetPassword", {
      newpass,
      renewpass,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const changePassword = async (oldPass, newPass, reNewPass) => {
  try {
    const response = await instance.put("/accounts/changepassword", {
      oldPass,
      newPass,
      reNewPass,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAll = async () => {
  try {
    const response = await instance.get("/accounts/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getByIdUser = async (id) => {
  try {
    const response = await instance.get(`/accounts/${id}`);
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};
export const uploadAvatar = async (formData) => {
  try {
    const response = await instance.post("/accounts/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error uploading image: " + error.message);
  }
};

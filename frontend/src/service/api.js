import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});
// Begin call api Account
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
export const register = async (email, useName, password, repassword) => {
  try {
    const response = await instance.post("/accounts/register", {
      email,
      useName,
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
export const logout = async () => {
  try {
    const response = await instance.post("/accounts/logout");
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
export const updateProfile = async (id, newData) => {
  try {
    const response = await instance.put(`/accounts/${id}/edit`, newData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteUser = async (idUser) => {
  try {
    const response = await instance.delete(`/accounts/${idUser}`);
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};
// end call api Account
// begin call api About-us
export const getAboutus = async () => {
  try {
    const response = await instance.get("/aboutus/getAbout");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createAboutus = async (slogan1, slogan2, content, img) => {
  try {
    const response = await instance.post("/aboutus", {
      slogan1,
      slogan2,
      content,
      img,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// end call api About-us
//begin call api blog
export const getBlogAllArticle = async () => {
  try {
    const response = await instance.get("/blog/allarticle");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBlogArticle = async () => {
  try {
    const response = await instance.get("/blog/getarticle");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBlogAllCate = async () => {
  try {
    const response = await instance.get("/blog/allcategory");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBlogCategory = async () => {
  try {
    const response = await instance.get("/blog/getcategory");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const uploadImg = async (formData) => {
  try {
    const response = await instance.post("/blog/uploadImg", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Error uploading image: " + error.message);
  }
};
export const createBlogCate = async (topic, content, img, type) => {
  try {
    const response = await instance.post("/blog", {
      topic,
      content,
      img,
      type,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteBlog = async (id) => {
  try {
    const response = await instance.delete(`/blog/${id}`);
    console.log(response.data);
  } catch (error) {
    throw error;
  }
};

//end call api blog
// begin call api service
export const getAllService = async () => {
  try {
    const response = await instance.get("/service");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getService = async () => {
  try {
    const response = await instance.get("/service/getService");
    return response.data;
  } catch (error) {
    throw error;
  }
};
//end call api service
// api all room
export const getAllRooms = async () => {
  try {
    const response = await instance.get("/room");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getRoomsById = async (id) => {
  try {
    const response = await instance.get(`/room/${id}`);
    console.log("yyy",response)
    return response.data;
  } catch (error) {
    throw error;
  }
};
// Api image room
export const getAllImage = async (id) => {
  try {
    const response = await instance.get(`/image/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// api phan trang room
export const getRoomsPagination = async (pageNumber, limit) => {
  try {
    const response = await instance.get(
      `/room?page=${pageNumber}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// api price
export const getAllRoomsSortedByPrice = async (order) => {
  try {
    const response = await instance.get(`/room/sortedByPrice/${order}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// api type room
export const getRoomsByType = async (type) => {
  try {
    const response = await instance.get(`/room/type/${type}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// api rating
export const getReviewByRoomId = async (rating) => {
  try {
    const response = await instance.get(`/room/review/${rating}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 
export const getAllBooking = async () => {
  try {
    const response = await instance.get("/booking");
    return response.data;
    console.log(response)
  } catch (error) {
    throw error;
  }
};
// api booking
export const postBooking = async (bookingData) => {
  try {
    const response = await instance.post("/booking", bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


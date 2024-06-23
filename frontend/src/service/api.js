import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "http://35.170.242.101:3001",

  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
      config.headers["x-access-token"] = user.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
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
export const register = async (email, username, password, repassword) => {
  try {
    const response = await instance.post("/accounts/register", {
      email,
      username,
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
export const updateRoles = async (id, roles) => {
  try {
    const response = await instance.put(`/accounts/updateRole/${id}`, {
      roles,
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
export const getByIdUserAll = async (id) => {
  try {
    const response = await instance.get(`/accounts/getAll/${id}`);
    return response.data;
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
// begin like rooom
export const getLikeRoom = async (userId) => {
  try {
    const response = await instance.get(`/roomfavorite/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addRoomLike = async (userId, roomId) => {
  try {
    const response = await instance.post(`/roomfavorite`, {
      userId,
      roomId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const removeRoomLike = async (userId, roomId) => {
  try {
    const response = await instance.delete(`/roomfavorite`, {
      data: {
        userId,
        roomId,
      },
    });
    console.log("success");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const removeRoomLikeAll = async (userId) => {
  try {
    await instance.delete(`/roomfavorite/deleteAll`, {
      data: { userId },
    });
    console.log("success");
  } catch (error) {
    throw error;
  }
};

// end like rooom
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
export const updateAboutus = async (id, newData) => {
  try {
    const response = await instance.put(`/aboutus/${id}`, newData);
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
export const updateBlog = async (id, newData) => {
  try {
    const response = await instance.put(`/blog/${id}`, newData);
    return response.data;
  } catch (error) {
    throw error;
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
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUpdatedRooms = async (id, updatedData) => {
  try {
    const response = await instance.put(`/room/${id}`, updatedData);
    console.log("test api", response);
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
// api booking
export const getAllBooking = async () => {
  try {
    const response = await instance.get("/booking");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBookingByStatus = async () => {
  try {
    const response = await instance.get("/booking/status");
    return response.data;
  } catch (error) {
    throw error;
  }
};
// api booking
export const getBookingIdUser = async (id) => {
  try {
    const response = await instance.get(`/booking/getBookingA/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postBooking = async (bookingData) => {
  try {
    const response = await instance.post("/booking", bookingData);
    console.log(response.data, "sss");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getBookingById = async (id) => {
  try {
    const response = await instance.get(`/booking/getBooking/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// begin api bookingDetails
export const createBookingDetails = async (data) => {
  try {
    const response = await instance.post("/bookingDetails", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// end api bookingDetails
//checkout
export const getPayment = async () => {
  try {
    const response = await instance.get("/payment/check");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createPayment = async (idBooking, methodPay, totalPay) => {
  try {
    const response = await instance.post("/payment/create", {
      idBooking,
      methodPay,
      totalPay,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateBooking = async (id, data) => {
  try {
    const response = await instance.put(`/booking/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteBooking = async (id) => {
  try {
    const response = await instance.delete(`/booking/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getupdatedBooking = async (id, bookingData) => {
  try {
    const response = await instance.put(`/booking/${id}`, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
//begin api contact
export const createContact = async (name, email, topic, content) => {
  try {
    const response = await instance.post("/contact", {
      name,
      email,
      topic,
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
//end api contact
//send email
export const sendEmail = async (email, data) => {
  try {
    const response = await instance.post("/payment/send", {
      email,
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addCart = async (roomId, userId) => {
  try {
    const response = await instance.post("/cart", {
      roomId,
      userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const removeCart = async (id) => {
  try {
    await instance.delete(`/cart/${id}`);
  } catch (error) {
    throw error;
  }
};
export const removeAllCart = async (id) => {
  try {
    await instance.delete(`/cart/all/${id}`);
  } catch (error) {
    throw error;
  }
};
// review
export const createReview = async (
  roomId,
  userId,
  rating,
  comment,
  note,
  reply
) => {
  try {
    console.log("Sending data to API:", {
      roomId,
      userId,
      rating,
      comment,
      note,
      reply,
    });
    const response = await instance.post("/review", {
      roomId,
      userId,
      rating,
      comment,
      note,
      reply,
    });
    console.log("test review", response);
    return response.data;
  } catch (error) {
    console.error(
      "Error calling API:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
export const getReviews = async (roomId) => {
  try {
    const response = await instance.get(`/review/${roomId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllReviews = async () => {
  try {
    const response = await instance.get(`/review`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getdeleteReviews = async (id) => {
  try {
    await instance.delete(`/review/${id}`);
  } catch (error) {
    throw error;
  }
};
export const getRatingStats = async () => {
  try {
    const response = await instance.get(`/review/ratings/stats`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateReview = async (id, updatedData) => {
  try {
    const response = await instance.put(`/review/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getRatingStatsRoom = async (roomId) => {
  try {
    const response = await instance.get(`/review/rating/stat/${roomId}`);
    console.log("test rating", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getRoomRatingStats = async (roomId) => {
  try {
    const response = await instance.get(`/room/${roomId}/rating-stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching room rating stats:", error);
    throw error;
  }
};
export const getRoomUtilities = async () => {
  try {
    const response = await instance.get(`/room/room-utilities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching room utilities:", error);
    throw error;
  }
};

import apiClient from "./services.js";

export default {
  loginUser(user) {
    return apiClient.post("tutorials/login", user);
  },
  authorizeUser(code) {
    return apiClient.post("tutorials/authorize", code);
  },
  logoutUser(token) {
    return apiClient.post("tutorials/logout", token);
  },
};

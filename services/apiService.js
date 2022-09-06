import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://6315b87333e540a6d382b859.mockapi.io/`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get("/users");
  },

  getUser(id) {
    return apiClient.get("/users/" + id);
  },

  createUser(user) {
    return apiClient.post("/users", user);
  },

  removeUser(id) {
    return apiClient.delete("/users/" + id);
  },

  putUser(id, user) {
    return apiClient.put("/users/" + id, user);
  },
};

import apiService from "../services/apiService";

export const state = () => ({
  users: [],
  user: {},
});

export const mutations = {
  SET_USERS(state, users) {
    state.users = users.reverse();
  },
  SET_USER(state, user) {
    state.user = user;
  },
  DELETE_USER(state, id) {
    const index = state.users.findIndex((user) => user.id === id);
    state.users.splice(index, 1);
  },
  CREATE_USER(state, user) {
    state.users.unshift(user);
  },

  GET_USER(state, user) {
    state.user = Object.assign({}, state.user, user);
  },

  UPDATE_USER(state, user) {
    const index = state.users.findIndex((item) => item.id === user.id);
    state.users[index] = user;
  },
};

export const actions = {
  async fetchUsers({ commit }) {
    const response = await apiService.getUsers();
    commit("SET_USERS", response.data);
  },

  async fetchUser({ commit }, id) {
    const response = await apiService.getUser(id);
    commit("SET_USER", response.data);
  },

  async deleteUser({ commit }, id) {
    await apiService.removeUser(id);
    commit("DELETE_USER", id);
  },

  async addUser({ commit }, user) {
    await apiService.createUser(user);
    commit("CREATE_USER", user);
  },

  async putUser({ commit }, { id, user }) {
    const response = await apiService.putUser(id, user);
    commit("UPDATE_USER", response.data);
  },
};

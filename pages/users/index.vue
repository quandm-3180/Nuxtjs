<template>
  <div class="pt-4">
    <div>
      <b class="h4">List User</b>
      <nuxt-link class="float-right" to="/users/create">
        <input type="button" class="btn btn-sm btn-success" value="Create" />
      </nuxt-link>
    </div>
    <UserCard v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("fetchUsers");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch users at this time. Please try again."
      });
    }
  },

  computed: mapState({
    users: state => state.users
  }),

  head() {
    return {
      title: "List user"
    };
  }
};
</script>
<style>
</style>
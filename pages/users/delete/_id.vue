<template>
  <div class="pt-3">
    <h2>Delete User</h2>
    <h5 class="py-3">Name: {{user.name}}</h5>
    <p>
      <b>WARNING!</b> The action cannot be undone.
    </p>
    <form @submit.prevent="submitDeleteUser(user.id)">
      <input type="submit" class="btn btn-info" value="Delete" />
      <nuxt-link to="/users">Cancel</nuxt-link>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("fetchUser", params.id);
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch #id" + params.id
      });
    }
  },

  computed: mapState({
    user: state => state.user
  }),

  methods: {
    ...mapActions(["deleteUser"]),

    submitDeleteUser(id) {
      this.deleteUser(id);
      this.$router.push("/users");
    }
  },

  head() {
    return {
      title: "Delete User"
    };
  }
};
</script>
<style>
</style>
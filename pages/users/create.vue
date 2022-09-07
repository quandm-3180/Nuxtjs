<template>
  <div>
    <h3 class="my-3">Create User</h3>
    <b-alert v-model="success" variant="success" dismissible>Create success</b-alert>
    <b-alert v-model="error" variant="danger" dismissible>Please fill in all fields</b-alert>

    <b-form @submit.prevent="submitCreateUser">
      <b-form-group id="input-group-1" label="Name:" label-for="name">
        <b-form-input v-model="name" id="name" type="text" placeholder="Nhap ten de"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Address:" label-for="address">
        <b-form-input v-model="address" id="address" type="text" placeholder="Nhap dia chi vao"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Old:" label-for="old">
        <b-form-input v-model="old" id="old" type="number" placeholder="Nhap tuoi de"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">
        <nuxt-link to="/users">Cancel</nuxt-link>
      </b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      name: null,
      address: null,
      old: null,
      success: false,
      error: false
    };
  },
  methods: {
    ...mapActions(["addUser"]),
    submitCreateUser() {
      if (this.validateForm()) {
        const objUser = {
          id: Date.now(),
          name: this.name,
          address: this.address,
          old: this.old
        };

        this.addUser(objUser);
        this.error = false;
        this.success = true;
        setTimeout(() => {
          this.$router.push("/users");
        }, 1500);
      } else {
        this.success = false;
        this.error = true;
      }
    },
    validateForm() {
      if (this.name && this.address && this.old) {
        return true;
      }
    }
  },

  head() {
    return {
      title: "Create User"
    };
  }
};
</script>
<style scoped>
div {
  width: 70%;
}
a {
  text-decoration: none;
  color: white;
}
</style>
<template>
  <div>
    <h3 class="my-3">Create User</h3>
    <b-form @submit.prevent="submitCreateUser">
      <b-form-group id="input-group-1" label="Name:" label-for="name">
        <b-form-input id="name" type="text" placeholder="Nhap ten de"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Address:" label-for="address">
        <b-form-input id="address" type="text" placeholder="Nhap dia chi vao"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Old:" label-for="old">
        <b-form-input id="old" type="number" placeholder="Nhap tuoi de"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addUser"]),
    submitCreateUser() {
      const user = {};
      this.addUser({ ...user });
    }
  }
};
</script>
<style scoped>
div {
  width: 70%;
}
</style>
<template>
  <div>
    <h3 class="my-3">Edit User</h3>
    <b-alert v-model="success" variant="success" dismissible>Edit success</b-alert>
    <b-alert v-model="error" variant="danger" dismissible>{{messageError}}</b-alert>

    <b-form @submit.prevent="submitUpdateUser(id)">
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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      success: false,
      error: false,
      messageError: null
    };
  },

  async asyncData({ store, error, params }) {
    try {
      await store.dispatch("fetchUser", params.id);
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch #id" + params.id
      });
    }
  },

  computed: {
    ...mapState(["user"]),

    id: {
      set(id) {
        this.$store.commit("GET_USER", { id });
      },
      get() {
        return this.user.id;
      }
    },

    // name: {
    //   set(name) {
    //     this.$store.commit("GET_USER", { name });
    //   },
    //   get() {
    //     return this.user.name;
    //   }
    // },
    // name: function() {
    //   console.log(3);
    //   // `this` points to the vm instance
    //   return this.$store.state.user.name;
    // },
    name() {
      return this.user.name;
    },

    address: {
      set(address) {
        this.$store.commit("GET_USER", { address });
      },
      get() {
        return this.user.address;
      }
    },

    old: {
      set(old) {
        this.$store.commit("GET_USER", { old });
      },
      get() {
        return this.user.old;
      }
    }
  },

  methods: {
    ...mapActions(["putUser"]),
    submitUpdateUser(id) {
      if (!this.validateForm()) {
        const that = this;
        this.putUser(id)
          .then(response => {
            this.error = false;
            this.success = true;
            setTimeout(() => {
              that.$router.push("/users");
            }, 2000);
          })
          .catch(function(error) {
            console.error(error);
          });
      } else {
        this.success = false;
        this.error = true;
      }
    },

    validateForm() {
      if (!this.name || !this.address || !this.old) {
        this.messageError = "Please fill in all fields";
        return false;
      } else if (!isNaN(this.old)) {
        this.messageError = "The old not number";
        return false;
      } else {
        return true;
      }
    }
  },

  head() {
    return {
      title: "Edit User"
    };
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: white;
}
</style>
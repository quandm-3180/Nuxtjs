<template>
  <div class="shadow">
    <nuxt-link :to="'/users/' + user.id">
      <b class="h4 text-dark">Name: {{user.name}} / Address: {{user.address}} / Old: {{user.old}}</b>
    </nuxt-link>
    <span class="float-right">
      <nuxt-link :to="'/users/edit/' + user.id">Edit</nuxt-link>&nbsp;
      <nuxt-link :to="'/users/delete/' + user.id">Delete</nuxt-link>
    </span>
  </div>
</template>
<script>
export default {
  name: "UserCard",
  props: {
    user: Object
  }
};
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
}

a {
  text-decoration: none;
}
</style>
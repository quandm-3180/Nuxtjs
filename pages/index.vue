<template>
  <div>
    <h3 class="my-4">Welcome to website</h3>
    <br />
    <p>
      go to CRUD
      <nuxt-link to="/users">User</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Homepage"
    };
  }
};
</script>

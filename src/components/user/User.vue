<template>
  <div>
    <h1>The User Page</h1>
    <button @click="navigateHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateHome() {
      this.$router.push({name: 'home'});
    }
  },
}
</script>
<script>
import * as Auth0 from 'auth0-web'

export default {
  name: 'Callback',
  created () {
    Auth0.handleAuthCallback(() => {
      this.$router.push('/')
    })
  }
}
</script>

<template>
<div>
  <p>Loading your profile...</p>
</div>
</template>

<style scoped>
div > p {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
}
</style>

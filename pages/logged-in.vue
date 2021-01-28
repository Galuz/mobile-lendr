<template>
  <div class="main-loggedin">
    <router-view />
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  middleware: 'user-auth'
}
</script>

<style lang="scss" scoped>

</style>

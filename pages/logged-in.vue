<template>
  <div class="main-loggedin">
    <NuxtChild  />
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

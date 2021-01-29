<template>
  <div class="layout-nav">
    <b-navbar class="b-navbar" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img src="@/assets/images/robot.svg" alt="Logo">
        <span>Integra <b>Software</b></span>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse" />
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="nav-item ml-auto">
          <li>
            Miguel Mencía
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.b-navbar{
  position: fixed;
  top: 0;
  width: 100%;
  height: 76px;
}
</style>

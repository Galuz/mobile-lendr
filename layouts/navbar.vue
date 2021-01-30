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
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ user }}</em>
            </template>
            <b-dropdown-item href="#" @click="test()">Cerrar sesión</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  },
  mounted()  {
    this.user = localStorage.getItem('user' || '')
  },
  methods: {
    test() {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
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

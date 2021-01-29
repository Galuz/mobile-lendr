<template>
  <div class="login">
    <img src="@/assets/images/robot.svg" alt="Logo">
    <div>
      <h3>¡Hola de nuevo!</h3>
      <p>
        Ingresa tus datos para entrar <br>
        a tu cuenta.
      </p>
    </div>
    <b-alert v-model="showDismissibleAlert" variant="warning" dismissible>
      error
    </b-alert>
    <form id="login" ref="form" @submit.prevent="onSubmit">
      <input
        v-model="email"
        type="text"
        placeholder="Correo electrónico"
        class="input-normal"
        autocomplete="new-password"
        required
      >
      <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        class="input-normal"
        autocomplete="new-password"
        minlength="6"
        maxlength="20"
        required
      >
      <button type="submit" form="login" class="btn-celeste">
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDismissibleAlert: false,
      error: {}
    }
  },
  methods: {
    onSubmit () {
      console.log('submitting...')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

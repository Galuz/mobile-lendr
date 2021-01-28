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
        placeholder="Número de teléfono"
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
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      this.$auth.loginWith('local', {
        data: {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      })
    },
    // validations
    onlyNumbers (e) {
      const key = String.fromCharCode(e.charCode)
      if (!/^[0-9]$/.test(key)) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 32px;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 640px;
  margin: 0 auto;
  > img {
    width: 50px;
    height: 50px;
    margin: 69px auto 59px auto;
  }
  > div {
    h3,
    p {
      font-family: 'Roboto-Regular';
      color: #fff;
      line-height: normal;
      letter-spacing: normal;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  form {
    input {
      margin-bottom: 8px;
      &:last-of-type{
          margin-bottom: 32px;
      }
    }
  }
}
</style>

<template>
  <div class="register">
    <img src="@/assets/images/robot.svg" alt="Logo">
    <div>
      <h3>¡Bienvenido!</h3>
      <p>Regístrate para comenzar.</p>
    </div>
    <form id="register" ref="form" @submit.prevent="onSubmit">
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
      <button type="submit" form="register" class="btn-celeste">
        Crear cuenta
      </button>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'user-auth',
  
  data () {
    return {
      email: '',
      password: '',
      showDismissibleAlert: false,
    }
  },
  methods: {
    onSubmit () {
      console.log('submitting...')
      this.$axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa687seGPCxKLHvF4350gzh29DLpnpTlI',{
        email: this.email,
        password: this.password,
        returnSecureToken: true
      })
      .then(() => {
        this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
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

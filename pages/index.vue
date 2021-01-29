<template>
  <div class="splash">
    <b-carousel
      id="carousel-no-animation"
      ref="myCarousel"
      style="text-shadow: 0px 0px 2px #000"
      indicators
      controls
      img-width="1024"
      img-height="480"
      :interval="interval"
      @sliding-start="slidingStart"
    >
      <b-carousel-slide
        class="slide-img"
        img-src="@/assets/images/splash/splash-1.png"
      ></b-carousel-slide>
      <b-carousel-slide
        class="slide-img"
        img-src="@/assets/images/splash/splash-2.png"
      ></b-carousel-slide>
      <b-carousel-slide
        class="slide-img"
        img-src="@/assets/images/splash/splash-3.png"
      ></b-carousel-slide>
    </b-carousel>
    <img src="@/assets/images/robot.svg" alt="Logo">
    <p v-if="slide === 0">
      Consigue todas tus refacciones en <br />
      un solo lugar y en tres sencillos <br />
      pasos: cotiza, elige y compra.
    </p>
    <p v-if="slide === 1">
      Enfócate en tu trabajo. <br />
      No pases más tiempo en llamadas <br />
      buscando refacciones.
    </p>
    <p v-if="slide === 2">
      Lleva el control digital de tus <br />
      pedidos, pagos y devoluciones.
    </p>
    <button class="btn-celeste" :disabled="disabled" @click="toLogin()">
      Iniciar sesión
    </button>
    <span
      >¿No tienes cuenta?
      <NuxtLink to="/Register" class="underline">Regístrate</NuxtLink></span
    >
  </div>
</template>

<script>
export default {
  middleware: 'user-auth',
  data() {
    return {
      slide: 0,
      interval: 4000,
      disabled: true,
    }
  },
  methods: {
    slidingStart(slide) {
      this.slide = slide
      if (slide === 2) {
        this.disabled = false
        this.interval = 0
      }
    },
    toLogin() {
      this.$router.push('Login')
    },
  },
}
</script>

<style lang="scss" scoped>
.splash {
  padding: 32px;
  min-height: 100vh;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  > img {
   margin: 16px 0;
  }
  p {
    font-family: 'Roboto-Regular';
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: normal;
    color: #fff;
    min-height: 57px;
  }
  button {
    margin-bottom: 14px;
  }
  span {
    font-family: 'Roboto-Regular';
    font-size: 14px;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;
    a {
      color: #6f94ff;
    }
  }
}
</style>

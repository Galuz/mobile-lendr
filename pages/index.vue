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
      />
      <b-carousel-slide
        class="slide-img"
        img-src="@/assets/images/splash/splash-2.png"
      />
      <b-carousel-slide
        class="slide-img"
        img-src="@/assets/images/splash/splash-3.png"
      />
    </b-carousel>
    <img src="@/assets/images/robot.svg" alt="Logo">
    <p v-if="slide === 0">
      Cuenta atrás para el Tour de Pokémon GO: <br>
      Kanto, ¡celebra con nosotros la región de Johto!
    </p>
    <p v-if="slide === 1">
      Día del Incienso: Pokémon de tipo <br>
      Eléctrico y Dragón ¡y protagonizado por Mareep!
    </p>
    <p v-if="slide === 2">
      La Temporada 6 de la Liga Combates GO <br>
      empieza el lunes, 30 de noviembre de 2020, a las 22:00 CET (13:00 PST)
    </p>
    <button class="btn-celeste" :disabled="disabled" @click="toLogin()">
      Iniciar sesión
    </button>
    <span>¿No tienes cuenta?
      <NuxtLink to="/Register" class="underline">Regístrate</NuxtLink></span>
  </div>
</template>

<script>
export default {
  middleware: 'user-auth',
  data () {
    return {
      slide: 0,
      interval: 4000,
      disabled: true
    }
  },
  methods: {
    slidingStart (slide) {
      this.slide = slide
      if (slide === 2) {
        this.disabled = false
        this.interval = 0
      }
    },
    toLogin () {
      this.$router.push('Login')
    }
  }
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

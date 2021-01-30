<template>
  <div class="details">
    <h3>detalles</h3>
    <pre>{{ pokemonId }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    pokemonId () {
      return this.$store.getters.getPokemon
    }
  },
  mounted () {
    console.log(this.$store.getters.getPokemon, 'mounteds')
    const endpoint = this.$store.getters.getPokemon
    this.$axios.get(endpoint)
      .then((response) => {
        const { moves } = response.data
        this.items = moves
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.details{
  h3{
    margin-top: 76px;
    color: #fff;
  }
  pre{
    color: #fff;
    font-size: 16px;
  }
}
</style>

<template>
  <div class="details">
    <h3>detalles</h3>
    <b-table
      :items="items"
      :fields="fields"
      selectable
      striped
      hover
      responsive
    />
  </div>
</template>

<script>
const fields = [
  { key: 'name', label: 'Nombre' }
]
export default {
  data () {
    return {
      items: [],
      fields
    }
  },
  computed: {
    pokemonId () {
      return this.$store.getters.getPokemon
    }
  },
  mounted () {
    const endpoint = this.$store.getters.getPokemon
    this.$axios.get(endpoint)
      .then((response) => {
        const { moves } = response.data
        Object.keys(moves).forEach((key) => {
          console.log(moves[key].move)
          // eslint-disable-next-line
          this.items.push({name: moves[key].move.name})
        })
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

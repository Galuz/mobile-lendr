<template>
  <div class="details">
    <h3>detalles</h3>
    <div class="header">
      <h2>Listado de pokemones</h2>
      <button class="btn-outline-green" @click="goto()">
        Buscar otro pokemon
      </button>
    </div>
    <b-table
      :items="items"
      :fields="fields"
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
  mounted () {
    const endpoint = this.$store.getters.getPokemon
    this.$axios.get(endpoint)
      .then((response) => {
        const { moves } = response.data
        Object.keys(moves).forEach((key) => {
          this.items.push({ name: moves[key].move.name })
        })
      }).catch((err) => {
        // eslint-disable-next-line
        console.log(err)
      })
  },
  methods: {
    goto () {
      this.$router.push('/logged-in')
    }
  }
}
</script>

<style lang="scss" scoped>
.details{
  padding: 32px;
  background-color: #1f2129;
  min-height: 100vh;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  h3{
    margin-top: 76px;
    font-family: 'Roboto-Regular';
    font-size: 12px;
    color: #fff;
    text-align: left;
  }
  .header{
    display: flex;
    border-bottom: 1px solid #fff;
    padding-bottom: 16px;
    h2{
      font-family: 'Roboto-Regular';
      font-size: 16px;
      color: #fff;
      margin: auto 0;
    }
    button{
      width: unset;
      margin-left: auto;
    }
  }
}
</style>

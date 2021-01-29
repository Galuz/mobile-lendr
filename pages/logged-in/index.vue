<template>
  <div class="index-loggedin">
    <h3>Listado</h3>
    <div class="header">
      <h2>Listado de pokemones</h2>
      <button class="btn-outline-green">
        Agregar nuevo
      </button>
    </div>
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
  mounted () {
    this.loadData()
    console.log('data...')
  },
  methods: {
    loadData () {
      console.log('data...')
      const base = 'https://pokeapi.co/api/v2/'
      this.$axios.get(`${base}pokemon?limit=20`)
        .then((response) => {
          const { results } = response.data
          this.items = results
          console.log(results)
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.index-loggedin{
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

<template>
  <div class="index-loggedin">
    <h3>listado</h3>
    <div>
      <h2>Listado de pokemones</h2>
      <button>Agregar nuevo</button>
    </div>
    <!-- <b-table
      :items="items"
      :fields="fields"
      selectable
      striped
      hover
      responsive>
    </b-table> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.loadData()
    console.log('data...')
  },
  methods: {
    loadData () {
      console.log('data...')
    }
  }
}
</script>

<style lang="scss" scoped>
.index-loggedin{
  min-height: 100vh;
  h3{
    color: #fff;
  }
}
</style>

export const state = () => ({
  test: ''
})

export const getters = {
  getPokemon (state) {
    return state.test
  }
}

export const mutations = {
  add (state, url) {
    console.log('add mutation')
    state.test = url
  }
}

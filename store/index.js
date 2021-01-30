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
    state.test = url
  }
}

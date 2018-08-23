import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  Cards: [{text: "hey"}, {text: "there"}, {text: "hayden"}], // Stores cards data
  SideCards: [{text: "this"}, {text: "is"}, {text: "a"}, {text: "sideCard"}],
  ActiveCards: [{text: "this"}, {text: "is"}, {text: "active"}]
}
const mutations = {

}

export default new Vuex.Store({
  state,
  mutations,
});

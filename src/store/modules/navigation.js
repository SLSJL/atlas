const state = {
  activeIndex: 0,
  menuItems: [
    {
      text: "Home",
      route: "/home"
    },
    {
      text: "Features",
      route: "/features"
    },
    {
      text: "Technology",
      route: "/technology"
    },
    {
      text: "Gallery",
      route: "/gallery"
    },
    {
      text: "Publications",
      route: "/publications"
    },
    {
      text: "Contact Us",
      route: "/contactus"
    }
  ]
};

const mutations = {
  SET_ACTIVEINDEX(state, activeIndex) {
    state.activeIndex = activeIndex;
  }
};

const getters = {};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
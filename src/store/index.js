export const state = () => ({
  chatOpen: false,
  skillsOpen: false,
});

export const getters = {
  getChatState(state) {
    return state.chatOpen;
  },
  getSkillState(state) {
    return state.skillsOpen;
  },
};

export const mutations = {
  setChatState(state) {
    state.chatOpen = !state.chatOpen;
  },
  setSkillState(state) {
    state.skillsOpen = !state.skillsOpen;
  },
};

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
};

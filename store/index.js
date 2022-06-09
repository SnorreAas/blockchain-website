export const state = () => ({
  connected: false,
});

export const getters = {
  getConnected: (state) => {
    return state.connected;
  },
};

// export const setters = {
//   setConnected: (state, payload) => {
//     return (state.connected = payload);
//   },
// };

export const mutations = {
  setConnected(state) {
    state.connected = state;
  },
};

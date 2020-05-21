import { INIT_USER_INFO } from "./mutations-type";

export default {
  [INIT_USER_INFO](state, response) {
    state.token = response.token;
    state.user_info = response.data;
  },
};

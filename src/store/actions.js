import { requireToken } from "../service/index";
import { INIT_USER_INFO } from "./mutations-type";

export default {
  requireTokenAsync(context) {
    requireToken()
      .then((response) => {
        console.log(response);
        context.commit(INIT_USER_INFO, response);
      })
      .catch((err) => {
        throw err;
      });
  },
};

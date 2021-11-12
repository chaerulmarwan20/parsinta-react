import axios from "axios";
import { atom, selector } from "recoil";

const theme = atom({
  key: "switch-theme",
  default: "dark",
});

const authUser = selector({
  key: "auth-user",
  get: async () => {
    let user = null;
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      user = { user: data };
    } catch (err) {
      user = { user: err.message };
    }
    return user;
  },
});

export { authUser, theme };

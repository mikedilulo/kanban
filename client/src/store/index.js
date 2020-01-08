import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: [],
    activeBoard: {},
    tasks: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    setLists(state, lists) {
      state.lists = lists;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    //#endregion

    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get("boards").then(res => {
        commit("setBoards", res.data);
      });
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post("boards", boardData).then(serverBoard => {
        dispatch("getBoards");
      });
    },
    //#endregion

    //#region -- LISTS --
    getLists({ commit, dispatch }) {
      api.get("lists").then(res => {
        commit("setLists", res.data);
      });
    },

    addList({ commit, dispatch }, listData) {
      api.post("lists", listData).then(serverList => {
        dispatch("getLists");
      });
    },
    deleteList({ commit, dispatch }, id) {
      api.delete("lists/" + id).then(serverList => {
        dispatch("getLists");
      });
    },

    getTasks({ commit, dispatch }) {
      api.get("tasks").then(res => {
        commit("setTasks", res.data);
      });
    },

    addTask({ commit, dispatch }, taskData) {
      api.post("/tasks", taskData).then(serverTask => {
        dispatch("getTasks");
      });
    },

    addComment({ commit, dispatch }, comment) {
      api.put("tasks/" + comment.taskId, comment).then(serverTask => {
        console.log(serverTask);
        dispatch("getTasks");
      });
    }

    //#endregion
  }
});

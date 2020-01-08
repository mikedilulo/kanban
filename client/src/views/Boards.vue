<template>
  <div class="boards">
    <Nav />WELCOME TO THE BOARDS!!!
    <form @submit.prevent="addBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />
      <button type="submit">Create Board</button>
    </form>
    <div class="row justify-content-around mt-5">
      <div class="col-sm-3" v-for="board in boards" :key="board._id">
        <div class="card m-3">
          <div class="card-body">
            <h5 class="card-title">
              <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
            </h5>
            <p
              class="card-text"
            >With supporting text below as a natural lead-in to additional content.</p>
            <button class="btn btn-danger" @click="deleteBoard(board._id)">Delete Board</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    deleteBoard(id) {
      this.$store.dispatch("deleteBoard", id);
    }
  },
  components: {
    Nav
  }
};
</script>

<style>
.card {
  border-radius: 15px;
  box-shadow: 5px 5px 20px -5px;
}
</style>
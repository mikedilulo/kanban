<template>
  <div class="board">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <h1>{{board.title}}</h1>
        <form @submit.prevent="addList">
          <div class="form-group">
            <input v-model="newList.title" type="text" class="form-control" placeholder="List" />
          </div>
          <button class="btn btn-success">Add List</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <list-component :boardData="board._id" />
      </div>
    </div>
  </div>
</template>

<script>
import ListComponent from "@/components/List";
export default {
  name: "board",
  props: ["boardId"],
  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.board._id
      }
    };
  },
  methods: {
    addList() {
      let list = { ...this.newList };
      this.$store.dispatch("addList", list);
      this.newList = {
        title: ""
      };
    }
  },
  components: {
    ListComponent
  }
};
</script>

<template>
  <div class="board">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <h1>{{board.title}}</h1>
        <form>
          <div class="form-group">
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="List" />
          </div>
          <button class="btn btn-success">Add List</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
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
        authorId: "",
        boardId: this.boardId
      }
    };
  },
  props: ["boardId"]
};
</script>

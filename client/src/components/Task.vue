<template>
  <div class="task">
    <h5 class="mt-5">{{taskData.description}}</h5>
    <button class="btn btn-danger" @click="deleteTask(taskData.id)">
      <i class="fa fa-trash"></i>
    </button>
    <form @submit.prevent="addComment()">
      <div class="d-flex">
        <div class="form-group mb-0">
          <input
            v-model="newComment.content"
            type="text"
            class="form-control"
            placeholder="Comment"
            required
          />
        </div>
        <button class="btn btn-warning">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </form>
    <div
      v-for="comment in taskData.comments"
      :key="comment.id"
      class="d-flex justify-content-between mb-4 mt-4"
    >
      <p>{{comment.content}}</p>
      <div class="dropdown">
        <button
          class="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-ellipsis-h"></i>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button class="dropdown-item">Edit</button>
          <button class="dropdown-item" @click="deleteComment(comment)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return {
      newComment: {
        content: "",
        taskId: this.taskData.id
      }
    };
  },
  methods: {
    addComment() {
      let comment = { ...this.newComment };
      this.$store.dispatch("addComment", comment);
      console.log("comment", comment);
      this.newComment = {
        content: "",
        taskId: this.taskData.id
      };
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    deleteComment(comment) {
      let newComment = {...comment, taskId: this.taskData.id}
      this.$store.dispatch("deleteComment", newComment);
    }
  },
  computed: {
    // comments() {
    //   return this.$store.state.tasks.filter(c => c.taskId == this.taskData.id);
    // }
  }
};
</script>

<style>
</style>
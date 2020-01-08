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
    <p v-for="comment in taskData.comments" :key="comment.id">{{comment.content}}</p>
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
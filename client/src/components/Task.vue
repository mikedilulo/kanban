<template>
  <div class="task">
    <h5 class="mt-5">{{taskData.description}}</h5>
    <form @submit.prevent="addComment(taskData.id)">
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
    {{taskData.comments}}
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["taskData"],
  data() {
    return {
      newComment: {
        content: ""
      }
    };
  },
  methods: {
    addComment(taskId) {
      let comment = { ...this.newComment };
      comment.taskId = taskId;
      this.$store.dispatch("addComment", comment);
    }
  },
  computed: {
    comments() {
      return this.$store.state.tasks.filter(c => c.taskId == this.taskId);
    }
  }
};
</script>

<style>
</style>
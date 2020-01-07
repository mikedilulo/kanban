<template>
  <div class="task">
    <div class="row">
      <div class="col-12" v-for="task in tasks" :key="task.id">
        <h5 class="mt-5">{{task.description}}</h5>
        <form @submit.prevent="addComment(task.id)">
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
        {{task.comments}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["listId"],
  mounted() {
    this.$store.dispatch("getTasks");
  },
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
    tasks() {
      return this.$store.state.tasks.filter(t => t.listId == this.listId);
    },
    comments() {
      return this.$store.state.tasks.filter(c => c.taskId == this.taskId);
    }
  }
};
</script>

<style>
</style>
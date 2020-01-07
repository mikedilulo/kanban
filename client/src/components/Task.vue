<template>
  <div class="task">
    <div class="row">
      <div class="col-12" v-for="task in tasks" :key="task.id">
        <h5 class="mt-5 d-flex justify-content-left ml-4 d-inline">{{task.description}}</h5>
        <button class="btn btn-warning">
          <i class="fa fa-plus"></i>
        </button>
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
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(t => t.listId == this.listId);
    }
  }
};
</script>

<style>
</style>
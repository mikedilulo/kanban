<template>
  <div class="task">
    <div class="row">
      <div class="col-12" v-for="task in tasks" :key="task.id">
        <h5>{{task.description}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["listId"],
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(t => t.listId == this.listId);
    }
  }
};
</script>

<style>
</style>
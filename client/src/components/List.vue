<template>
  <div class="list">
    <p>{{list.title}}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["boardData"],
  computed: {
    list() {
      return this.$store.state.lists.filter(b => b._id == boardData);
    }
  }
};
</script>

<style scoped>
</style>

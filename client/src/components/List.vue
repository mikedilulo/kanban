<template>
  <div class="list">
    <div class="row">
      <div class="col-12 col-md-3" v-for="list in lists" :key="list.id">
        <p>
          {{list.title}}
          <button class="ml-3 bg-danger" @click="deleteList(list.id)">
            <i class="fa fa-trash text-white"></i>
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["boardId"],
  mounted() {
    this.$store.dispatch("getLists");
  },
  computed: {
    lists() {
      return this.$store.state.lists.filter(l => l.boardId == this.boardId);
    }
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
    }
  }
};
</script>

<style scoped>
</style>

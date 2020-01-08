<template>
  <div class="list">
    <h4>{{listData.title}}</h4>
    <button class="btn ml-3 btn-danger" @click="deleteList(listData.id)">
      <i class="fa fa-trash text-white"></i>
    </button>
    <div>
      <form @submit.prevent="addTask()">
        <div class="form-group">
          <input
            v-model="newTask.description"
            type="text"
            class="form-control"
            placeholder="Task"
            required
          />
        </div>
        <button class="btn btn-success">Add Task</button>
      </form>
    </div>
    <div>
      <div class="row">
        <div class="col-12" v-for="task in tasks" :key="task.id">
          <task-component :taskData="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskComponent from "@/components/Task";
export default {
  name: "List",
  props: ["listData"],
  mounted() {
    this.$store.dispatch("getLists");
    this.$store.dispatch("getTasks");
  },
  data() {
    return {
      newTask: {
        description: "",
        boardId: this.listData.boardId,
        listId: this.listData.id
      }
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(t => t.listId == this.listData.id);
    }
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
    },
    addTask() {
      let task = { ...this.newTask };
      this.$store.dispatch("addTask", task);
      console.log(task);
      this.newTask = {
        description: ""
      };
    }
  },
  components: {
    TaskComponent
  }
};
</script>

<style scoped>
</style>

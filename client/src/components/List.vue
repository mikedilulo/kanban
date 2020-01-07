<template>
  <div class="list">
    <div class="row">
      <div class="col-12 col-md-3" v-for="list in lists" :key="list.id">
        <h4>
          {{list.title}}
          <button class="btn ml-3 btn-danger" @click="deleteList(list.id)">
            <i class="fa fa-trash text-white"></i>
          </button>
        </h4>
        <div>
          <form @submit.prevent="addTask(list.id)">
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
            <div class="col-12">
              <task-component :listId="list.id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskComponent from "@/components/Task";
export default {
  name: "List",
  props: ["boardId"],
  mounted() {
    this.$store.dispatch("getLists");
  },
  data() {
    return {
      newTask: {
        description: "",
        boardId: this.boardId
      }
    };
  },
  computed: {
    lists() {
      return this.$store.state.lists.filter(l => l.boardId == this.boardId);
    }
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", id);
    },
    addTask(id) {
      let task = { ...this.newTask };
      task.listId = id;
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

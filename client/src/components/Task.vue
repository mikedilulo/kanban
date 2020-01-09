<template>
  <div class="task" :id="taskData.id">
    <h5 class="mt-5">{{ taskData.description }}</h5>

    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Edit Task</a>
        <a href="#" @click="deleteTask(taskData.id)">Delete Task</a>
        <div class="sub-dropdown">
          <button class="sub-dropbtn">Move To</button>
          <div class="sub-dropdown-content">
            <p
              v-for="list in lists"
              :key="list.id"
              @click="updateListId(list.id)"
            >
              {{ list.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
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
      <p>{{ comment.content }}</p>
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
          <button class="dropdown-item" @click="deleteComment(comment)">
            Delete
          </button>
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
      let newComment = { ...comment, taskId: this.taskData.id };
      this.$store.dispatch("deleteComment", newComment);
    },
    updateListId(id) {
      this.taskData.listId = id;
      this.$store.dispatch("editTask", this.taskData);
    }
  },
  computed: {
    lists() {
      return this.$store.state.lists.filter(
        l => l.boardId == this.taskData.boardId
      );
    }
  }
};
</script>

<style>
.dropbtn,
.sub-dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
.dropdown,
.sub-dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content,
.sub-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.sub-dropdown-content {
  left: 50%;
}
.dropdown-content a,
.sub-dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
.sub-dropdown-content a:hover {
  background-color: #ddd;
}
.sub-dropdown:hover .sub-dropdown-content {
  display: block;
}
.sub-dropdown:hover .sub-dropbtn {
  background-color: #3e8e41;
}
</style>

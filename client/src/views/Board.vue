<template>
  <div class="board container-fluid bakkground">
    <Nav />
    <div class="row">
      <div class="col-md-4 mx-auto">
        <h1 class="text-light border bg-dark">{{ board.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-3" v-for="list in lists" :key="list.id">
            <list-component :listData="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ListComponent from "@/components/List";
export default {
  name: "board",
  props: ["boardId"],
  mounted() {
    this.$store.dispatch("getBoards");
    this.$store.dispatch("getLists");
  },
  computed: {
    board() {
      return (
        //FIXME This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    },
    lists() {
      return this.$store.state.lists.filter(l => l.boardId == this.boardId);
    }
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.boardId
      }
    };
  },
  components: {
    ListComponent,
    Nav
  }
};
</script>

<style>
/* .bakkground {
  background: url("https://images.unsplash.com/photo-1517757910079-f57fd7f49a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80")
    no-repeat center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 663px;
} */
</style>

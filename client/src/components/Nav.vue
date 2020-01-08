<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-12 pl-0 pr-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div>
            <p class="navbar-brand m-0 bg-light rounded pl-2 pr-2">
              <i class="fas fa-edit mr-2"></i>
              <img alt="Vue logo" class="img" src="../assets/logo.png" />
              <span class="text-dark">anban</span>
            </p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mr-3">
              <!-- NOTE Adding new buttons on one component -->
              <li>
                <button class="btn btn-danger ml-4" @click="logout">Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
// File name
export default {
  name: "Nav",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.img {
  height: 1.2em;
}
</style>
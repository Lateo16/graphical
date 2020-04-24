<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-sm navbar-light bg-success">
      <a class="navbar-brand" href="#">Graphical</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><router-link :to="plot">Plot</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Github</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navbar-brand {
        margin-left: 80px;
        color: white !important;
    }

    .nav-link {
        /* margin-left: 650px; */
        color: white !important;
    }
</style>>


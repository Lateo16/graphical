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
        <div class="nav navbar-nav ml-auto">
          <router-link 
          :to="{name: 'homepage'}" 
          class="nav-item nav-link"
          active-class="active"
          exact>
          Home
          </router-link>
          <router-link 
          :to="{name: 'plotpage'}" 
          class="nav-item nav-link"
          active-class="active"
          exact>
          Plot
          </router-link>
          <router-link 
          :to="{name: 'homepage'}" 
          class="nav-item nav-link"
          active-class="active"
          exact>
          Contact
          </router-link>
          <router-link 
          :to="{name: 'homepage'}" 
          class="nav-item nav-link"
          active-class="active"
          exact>
          Github
          </router-link>
        </div>
      </div>
    </nav>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navbar-brand {
        margin-left: 130px;
        color: white !important;
    }

    .nav-link {
        /* margin-left: 650px; */
        color: white !important;
    }
    
</style>>


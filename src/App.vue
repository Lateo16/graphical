<template>
  <div id="app">
    <NavBar/>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './screens/HomePage'
import NavBar from './components/NavBar'


export default {
  name: 'App',
  components: {
    HomePage,
    NavBar,
  }
}
</script>

<style>

</style>

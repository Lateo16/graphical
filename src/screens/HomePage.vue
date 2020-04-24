<template>
  <div class="home-page">
    <main class="intro-section">
      <center>
        <h1 class="container site-name">Graphical</h1>
        <section>
          <p class="intro-exp">Plotting made easy, plot any type of data in csv, excel and many forms.</p>
        </section>
        <div class="plot-now-button">
          <PlotBtn btnName="Plot now" class="plot-btn"/>
        </div>
      </center>
    </main>
  </div>
</template>

<script>
import PlotBtn from "../components/PlotBtn";
export default {
  name: "HomePage",
  components: {
    PlotBtn
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .intro-section {
    padding-top: 150px;
  }
  .site-name,  .intro-exp {
    font-family: 'Courier New', Courier, monospace;
  }
  .plot-btn {
    margin-top: 50px;
  }
</style>

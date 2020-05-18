<template>
  <div>
      <h1>This is the plot page.</h1>
      <div class="plot-section">
      </div>
      <div class="plot-btns">
        <PlotBtn btnName="plot"/>
        <PlotBtn btnName="choose file"/>
      </div>
  </div>
</template>

<script>
import PlotBtn from "../components/PlotBtn";
export default {
    name: 'PlotPage',
    components: {
      PlotBtn,
    }
}
</script>

<style scoped>
  .plot-section {
    width:700px;
    height: 458px;
    background-color: green;
  }
</style>

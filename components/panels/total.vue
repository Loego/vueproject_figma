<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>
  

<template>

      <div id="allocation-div" class = "container mt-5" >
        <div class="row justify-content-center pt-5 pb-5">
          <p class="h11 sample-color">Token Allocation</p>
          <div class="col-11 col-sm-10 col-md-10 col-lg-10 col-xl-10 pt-5 pb-5 justify-content-center align-items-center">
            
            <Doughnut :data="data" :options="options" style="width: 600px;"/>
        </div>
  </div>
</div>
</template>

<style scoped>

.graphPanel{
    margin-top: 125px;
    margin-bottom: 65px;
    width: 600px;
    height: 600px;
    background-image: url("../../assets/images/total/Vector.png");
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
}
.graphPage{
    display: flex;
    flex-direction: column;
}


</style>


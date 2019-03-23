<template>
  <div class="dashboard-container">
    <div class="dashboard">

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <mapChart :chart-data="lineChartData"/>
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <raddar-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <bar-chart/>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import echarts from 'echarts'
import mapChart from './components/MapChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'

// const mapChartData = {
//   newVisitis: {
//     latitude: [3.2, 24.2, 34, 44, 54, 64, 74],
//     longitude: [3.2, 24.2, 34, 44, 54, 64, 74]
//   }
// }

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'Dashboard',
  components: {
    RaddarChart,
    PieChart,
    BarChart,
    mapChart
  },
  data() {
    return {
    }
  },
  created() {
  },
  method: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData['messages']
    }
  },
  // computed: {
  // },
  mounted() {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>

<template>
  <div class="detail-container">
    <div class="detail">

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>Welcome to CCA - {{ callsign }}</h1>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>航班量</h1>
        <h3>总共航班量： {{ list.totalFlight }}</h3>
        <h3>有效航班量：{{ list.validFlight }}</h3>
        <h3>无效航班量：{{ list.invalidFlight }}</h3>
        <h3>通过率：{{ list.validRate }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>飞行时间</h1>
        <h3>总共飞行时间： {{ list.totalDuration }}</h3>
        <h3>最大飞行时间：{{ list.maxDuration }}</h3>
        <h3>最小飞行时间：{{ list.minDuration }}</h3>
        <h3>平均飞行时间：{{ list.averageDuration }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>接地率</h1>
        <h3>最大接地率：{{ list.maxLandingRate }}</h3>
        <h3>最小接地率：{{ list.minLandingRate }}</h3>
        <h3>平均接地率：{{ list.averageLandingRate }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>过载</h1>
        <h3>最大过载：{{ list.maxOverload }}</h3>
        <h3>最小过载：{{ list.minOverload }}</h3>
        <h3>平均过载：{{ list.averageOverload }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>FOQA</h1>
        <h3>最大FOQA：{{ list.maxFOQA }}</h3>
        <h3>最小FOQA：{{ list.minFOQA }}</h3>
        <h3>平均FOQA：{{ list.averageFOQA }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>航班得分</h1>
        <h3>最大航班得分：{{ list.maxFlightScore }}</h3>
        <h3>最小航班得分：{{ list.minFlightScore }}</h3>
        <h3>平均航班得分：{{ list.averageFlightScore }}</h3>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>运营得分</h1>
        <h3>最大运营得分：{{ list.maxOperationScore }}</h3>
        <h3>最小运营得分：{{ list.minOperationScore }}</h3>
        <h3>平均运营得分：{{ list.averageOperationScore }}</h3>
      </el-row>

      <!-- <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="chart-wrapper">
          <calendar-chart/>
        </div>
      </el-row> -->

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <h2>For Test</h2>
            <overview-chart :chart-data="lineChartData"/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <overview-chart :chart-data="this.setBarChart()"/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <overview-chart/>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
import OverviewChart from './components/OverviewChart'
import CalendarChart from './components/CalendarChart'
import { fetchCrew } from '@/api/crew'

const lineChartData = {
  validFlight: [22],
  invalidFlight: [212]
}

export default {
  name: 'Detail',
  filters: {
    statusFilter(status) {
      const statusMap = {
        Published: 'success',
        Draft: 'gray',
        Deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  components: {
    OverviewChart,
    CalendarChart
  },
  data() {
    return {
      flight: {},
      flag: false,
      lineChartData: lineChartData,
      list: null,
      calsign: null,
      listLoading: false
    }
  },
  created() {
    this.callsign = this.$route.params && this.$route.params.id
    console.log('callsign: ' + this.callsign)
    this.getData(this.callsign)
  },
  methods: {
    getData(callsign) {
      this.listLoading = true
      fetchCrew(callsign).then(response => {
        this.list = response
        console.log('response', response)
      }).catch(err => {
        console.log(err)
      })
      this.listLoading = false
    },
    setBarChart() {
      this.flight = {
        validFlight: [this.list.validFlight],
        invalidFlight: [this.list.invalidFlight]
      }
      this.flag = true
      return this.flight
    },
    cancelSelection(rows) {
      this.$refs.core_module.clearSelection()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.detail {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>

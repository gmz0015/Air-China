<template>
  <div class="detail-container">
    <div class="detail">

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <h1>{{ callsign }}</h1>
      </el-row>

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <div class="chart-wrapper">
          <calendar-chart/>
        </div>
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
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

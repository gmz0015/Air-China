<template>
  <div class="detail-container">
    <div class="detail">

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        Weicome
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <overview-chart/>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <overview-chart/>
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
    OverviewChart
  },
  data() {
    return {
      list: null,
      listModule: null,
      listCoreModule: null,
      listLoading: false,
      multipleSelection: []
    }
  },
  created() {
    // const id = this.$route.params && this.$route.params.id
    // this.getData(id)
  },
  methods: {
    getData(id) {
      this.listLoading = true
      fetchProgramme(id).then(response => {
        this.list = response.items
      }).catch(err => {
        console.log(err)
      })
      fetchProgrammeCoreModule(id).then(response => {
        this.listCoreModule = response.items
      }).catch(err => {
        console.log(err)
      })
      fetchProgrammeModule(id).then(response => {
        this.listModule = response.items
      }).catch(err => {
        console.log(err)
      })
      this.listLoading = false
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

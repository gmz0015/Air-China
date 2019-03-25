<template>
  <div class="app-container">

    <el-button @click="clearFilter">Clear All Filters</el-button>

    <el-table
      v-loading="listLoading"
      ref="crewOverviewTable"
      :data="list"
      :default-sort = "{prop: 'c', order: 'ascending'}">

      <!-- Callsign -->
      <el-table-column :formatter="formatCallsign" align="center" label="呼号" prop="callsign" width="150" sortable/>

      <!-- Rating -->
      <el-table-column align="center" label="等级" prop="rating" width="150" sortable/>

      <!-- Position -->
      <el-table-column label="职务" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.normal" type="success">飞行员</el-tag>
          <el-tag v-if="scope.row.dispatch" type="warning">签派</el-tag>
          <el-tag v-if="scope.row.administrator" type="info">管理</el-tag>
        </template>
      </el-table-column>

      <!-- Status -->
      <el-table-column
        :formatter="formatStatus"
        :filters="[{ text: '通过', value: '1' }, { text: '待审核', value: '0' }]"
        :filter-method="filterStatus"
        filter-placement="bottom-end"
        class-name="status-col"
        prop="status"
        label="Status"
        width="110"
        align="center"
        sortable>
        <!-- <el-tag  prop="status"/> -->
        <!-- <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter" >{{ scope.row.status }}</el-tag>
        </template> -->
      </el-table-column>

      <!-- Botton -->
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">

          <!-- Details -->
          <!-- <el-button size="mini" type="success" @click="onDetail(scope.row)">Details</el-button> -->

          <!-- Delete -->
          <!-- <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">{{ 'Delete' }}
          </el-button> -->

          <!-- Edit -->
          <router-link :to="'/crew/detail/'+scope.row.callsign">
            <el-button type="primary" size="small" icon="el-icon-edit">Detail</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/crew'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        '通过': 'gray',
        0: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response
        console.log(response.length)

        // Just to simulate the time of the request
        this.listLoading = false
      })
    },
    formatCallsign: function(row, column) {
      if (row.callsign.length === 1) {
        return '000' + row.callsign
      } else if (row.callsign === 2) {
        return '00' + row.callsign
      } else if (row.callsign.length === 3) {
        return '0' + row.callsign
      } else {
        return row.callsign
      }
    },
    formatStatus: function(row, column) {
      if (row.status === '0') {
        return '待审核'
      } else if (row.status === '1') {
        return '通过'
      }
    },
    clearFilter() {
      this.$refs.crewOverviewTable.clearFilter()
    },
    filterStatus(value, row) {
      return row.status === value
    }
  }
}
</script>

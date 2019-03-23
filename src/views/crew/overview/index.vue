<template>
  <div class="app-container">

    <el-button @click="clearFilter">Clear All Filters</el-button>

    <el-table
      v-loading="listLoading"
      ref="programmeOverviewTable"
      :data="list"
      :default-sort = "{prop: 'id', order: 'ascending'}">

      <!-- ID -->
      <el-table-column align="center" label="呼号" width="150" prop="callsign" sortable/>

      <!-- Title -->
      <el-table-column align="center" prop="rating" label="等级" width="150" sortable/>

      <!-- Author -->
      <el-table-column label="职务" align="center">
        <template slot-scope="scope">
        <el-table-row v-if=scope.row.normal>
          <el-tag type="success">飞行员</el-tag>
        </el-table-row>
        <el-table-row v-if=scope.row.dispatch>
          <el-tag type="warning">签派</el-tag>
        </el-table-row>
        <el-table-row v-if=scope.row.administrator>
          <el-tag type="info">管理</el-tag>
        </el-table-row>

          <span>{{ scope.row.position }}</span>
        </template>
      </el-table-column>

      <!-- Status -->
      <el-table-column
        :filters="[{ text: '通过', value: 'pass' }, { text: '待审核', value: 'pending' }, { text: '停飞', value: 'grouded' }]"
        :filter-method="filterStatus"
        filter-placement="bottom-end"
        class-name="status-col"
        prop="status"
        label="Status"
        width="110"
        align="center"
        sortable>
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter" >{{ scope.row.status }}</el-tag>
        </template>
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
          <router-link :to="'/programme/detail/'+scope.row.id">
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
        pass: 'success',
        panding: 'gray',
        grouded: 'danger'
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
        this.list = response.items
        this.total = response.total

        // Just to simulate the time of the request
        this.listLoading = false
      })
    },
    clearFilter() {
      this.$refs.programmeOverviewTable.clearFilter()
    },
    filterStatus(value, row) {
      return row.status === value
    }
  }
}
</script>

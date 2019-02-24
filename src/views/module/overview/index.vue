<template>
  <div class="app-container">

    <el-table :data="list" v-loading="listLoading">

      <!-- ID -->
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          <span> {{ scope.row.id }} </span>
        </template>
      </el-table-column>

      <!-- Title -->
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <!-- Author -->
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <!-- Status -->
      <el-table-column class-name="status-col" label="Status" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
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
          <router-link :to="'/module/detail/'+scope.row.id">
            <el-button type="primary" size="small" icon="el-icon-edit">Detail</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/module'

export default {
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
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    }
  }
}
</script>

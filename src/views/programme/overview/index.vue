<template>
  <div class="app-container">

    <el-button @click="clearFilter">Clear All Filters</el-button>

    <el-table ref="programmeOverviewTable" :data="list" v-loading="listLoading" :default-sort = "{prop: 'id', order: 'ascending'}">

      <!-- ID -->
      <el-table-column align="center" label="ID" width="95" prop="id" sortable>
      </el-table-column>

      <!-- Title -->
      <el-table-column label="Title" prop="title">
      </el-table-column>

      <!-- Author -->
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <!-- Status -->
      <el-table-column class-name="status-col" prop="status" label="Status" width="110" align="center" sortable
        :filters="[{ text: 'Published', value: 'Published' }, { text: 'Draft', value: 'Draft' }, { text: 'Deleted', value: 'Deleted' }]"
        :filter-method="filterStatus"
        filter-placement="bottom-end">
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
import { fetchList } from '@/api/programme'

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
        this.listLoading = false
      })
    },
    clearFilter() {
      this.$refs.programmeOverviewTable.clearFilter();
    },
    filterStatus(value, row) {
      return row.status === value;
    },
  }
}
</script>

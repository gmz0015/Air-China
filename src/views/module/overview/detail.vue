<template>
  <div class="app-container">

    <!-- ID -->
    <el-row :gutter="20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">ID</div>
        <div >
          {{ list.id }}
        </div>
      </el-card>
    </el-row>

    <!-- Title -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Title</div>
        <div >
          {{ list.title }}
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <!-- Author -->
      <el-col :span="12" class="text-center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Author</div>
          <div >
            {{ list.author }}
          </div>
        </el-card>
      </el-col>

      <!-- Status -->
      <el-col :span="12" class="text-center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Status</div>
          <div >
            <el-tag :type="list.status | statusFilter">{{ list.status }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- Edit History -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">History</div>
        <div >
          {{ list.content }}
        </div>
      </el-card>
    </el-row>

  </div>
</template>

<script>
import { fetchModule } from '@/api/module'

// TODO: check the definition of data, need to definete the id, author, ...
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
  data() {
    return {
      list: null
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.$message(id)
    this.fetchData(id)
  },
  methods: {
    fetchData(id) {
      fetchModule(id).then(response => {
        this.list = response.items
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

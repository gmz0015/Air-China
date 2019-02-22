<template>
  <div class="app-container">

    <!-- ID -->
    <el-row :gutter="20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">ID</div>
        <div >
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </div>
      </el-card>
    </el-row>

    <!-- Title -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Title</div>
        <div >
          <template slot-scope="scope">
            {{ scope.row.title }}
          </template>
        </div>
      </el-card>
    </el-row>

    <!-- Author -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Author</div>
        <div >
          <template slot-scope="scope">
            {{ scope.row.author }}
          </template>
        </div>
      </el-card>
    </el-row>

    <!-- Previews -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Previews</div>
        <div >
          <template slot-scope="scope">
            {{ scope.row.previews }}
          </template>
        </div>
      </el-card>
    </el-row>

    <!-- Status -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Status</div>
        <div >
          <template slot-scope="scope">
            {{ scope.row.status }}
          </template>
        </div>
      </el-card>
    </el-row>

    <!-- Time -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Time</div>
        <div >
          <template slot-scope="scope">
            {{ scope.row.display_time }}
          </template>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { fetchProgramme } from '@/api/table'

export default {
  name: 'Detail',
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
      fetchProgramme(id).then(response => {
        this.list = response.data.items
      }).catch(err => {
        console.log(err)
      })
    },
  }
}
</script>

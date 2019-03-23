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

    <!-- programme level learning outcomes -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">Programme Level Learning Outcomes</div>
        <div >
          {{ list.content }}
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

    <el-row :gutter="20" style="margin-top:25px;">
      <!-- Core Modules -->
      <el-col :span="12" class="text-center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Core Modules</div>
          <div >
            <el-table
              v-loading="listLoading"
              ref="core_module"
              :data="listCoreModule"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange">

              <el-table-column type="selection" width="55"/>

              <el-table-column label="Code" prop="code"/>

              <el-table-column label="Name" prop="name"/>

              <el-table-column label="Tutor" prop="tutor"/>
            </el-table>
          </div>
        </el-card>
      </el-col>

      <!-- Optional Modules -->
      <el-col :span="12" class="text-center">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Optional Modules</div>
          <div >
            <el-table v-loading="listLoading" :data="listModule" tooltip-effect="dark" @selection-change="handleSelectionChange">

              <el-table-column type="selection" width="55"/>

              <el-table-column label="Code" prop="code"/>

              <el-table-column label="Name" prop="name"/>

              <el-table-column label="Tutor" prop="tutor"/>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-button style="margin-top:25px;" @click="cancelSelection()">Cancel Selection</el-button>
    <el-button style="margin-top:25px;" @click="getSelection()">Display the detail of the selected module(s)</el-button>

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
import { fetchProgramme, fetchProgrammeModule, fetchProgrammeCoreModule } from '@/api/programme'

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
      list: null,
      listModule: null,
      listCoreModule: null,
      listLoading: false,
      multipleSelection: []
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.getData(id)
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

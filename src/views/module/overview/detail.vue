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
          <div>
            <el-tag :type="list.status | statusFilter">{{ list.status }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">

      <el-col :span="8">
        <el-card class="box-card">
          <div>
            <el-table >
              <el-table-column label="No.">
                <template slot-scope="scope">
                  {{ scope.aims }}
                </template>
              </el-table-column>

              <el-table-column label="Aim">
                <template v-for="aim in list.aims">
                  {{ aim }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Skills</div>
          <div >
            {{ list.skills }}
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">Knowledges</div>
          <div >
            <template v-for="knowledge in list.knowledges">
              {{ knowledge }}
            </template>
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
    console.log('id is: ' + id)
    this.$message(id)
    this.fetchData(id)
  },
  methods: {
    fetchData(id) {
      fetchModule(id).then(response => {
        this.list = response.items
        console.log(this.list.aims)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

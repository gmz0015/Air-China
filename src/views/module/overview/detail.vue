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

      <el-col>
        <el-card class="box-card">
          <div>
            <el-table :data="list.aims">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table :data="listByAim">
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

                        <!-- Edit -->
                        <router-link :to="'/module/detail/'+scope.row.id">
                          <el-button type="primary" size="small" icon="el-icon-edit">Detail</el-button>
                        </router-link>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column type="index" label="No."/>

              <el-table-column label="Aim">
                <template slot-scope="scope">
                  <span> {{ scope.row }} </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <el-col >
        <el-card class="box-card">
          <el-table :data="list.skills">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="listByAim">
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

                      <!-- Edit -->
                      <router-link :to="'/module/detail/'+scope.row.id">
                        <el-button type="primary" size="small" icon="el-icon-edit">Detail</el-button>
                      </router-link>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>

            <el-table-column type="index" label="No."/>

            <el-table-column label="Skill">
              <template slot-scope="scope">
                <span> {{ scope.row }} </span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <el-col>
        <el-card class="box-card">
          <el-table :data="list.knowledges">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-table :data="listByAim">
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

                      <!-- Edit -->
                      <router-link :to="'/module/detail/'+scope.row.id">
                        <el-button type="primary" size="small" icon="el-icon-edit">Detail</el-button>
                      </router-link>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-table-column>

            <el-table-column type="index" label="No."/>

            <el-table-column label="Knowledge">
              <template slot-scope="scope">
                <span> {{ scope.row }} </span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <!-- Edit History -->
    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">History</div>
        <div >
          <span>{{ list.content }}</span>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { fetchModule, fetchModuleByAim } from '@/api/module'

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
      listByAim: null,
      listBySkill: null,
      listByKnowledge: null
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    console.log('id is: ' + id)
    this.fetchData(id)
    this.fetchDataByAim(id)
  },
  methods: {
    fetchData(id) {
      fetchModule(id).then(response => {
        this.list = response.items
      }).catch(err => {
        console.log(err)
      })
    },
    fetchDataByAim(id) {
      fetchModuleByAim(id).then(response => {
        this.listByAim = response.items
        console.log('byAim')
        console.log(this.listByAim)
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

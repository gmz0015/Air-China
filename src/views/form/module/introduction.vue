<template>
  <div class="app-container">

    <!-- Introduction -->

    <!-- Header -->
    <el-row :gutter="20">
      <el-card class="box-card">
        <div >
          <p>
            This form sets out the criteria which the University of Sheffield uses to give full academic approval for a new programme.
            This will be used by departments and Faculties when approvting a new programe.
          </p>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Please read through all sections of the form before completing</span>
        </div>
        <div style="margin-right:10px;">
          <el-row :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/form/index">B1: Programme Content</router-link>
          </el-row>

          <el-row :span="4" class="text-center">
            <mallki class-name="mallki-text" text="B2: Reference Points and Consultation" @click="onTest()"/>
          </el-row>

          <el-row :span="4" class="text-center">
            <mallki class-name="mallki-text" text="B3: Prospectus" @click="onTest()"/>
          </el-row>

          <el-row :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/form/index">B4: HEAR Programme Description</router-link>
          </el-row>

          <el-row :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/form/index">B5: Additional Information for Dual or Interdisciplinary Programmes</router-link>
          </el-row>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div >
          <p>All new programmes should be developed with reference to the Programme Level Approach(PLA)</p>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top:25px;">
      <el-card class="box-card">
        <div >
          <p>
            Your contact in the Academic Programmes Office also have access to the form and till be on hand to offer support.
            The name of your main contact in the Quality and Standards Team will have been included in the message you received when this form was shared with you.
          </p>
        </div>
      </el-card>
    </el-row>
  </div>


</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
import index from './index'
import B1 from './B1'

export default {
  name: 'Introduction',
  components: {
    Mallki
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      active: 0
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item{
  min-height: 100px;
}
</style>

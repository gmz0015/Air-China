<template>
  <div class="app-container">

    <!-- Step -->
    <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="Introduction"/>
      <el-step title="Information"/>
      <el-step title="Review"/>
    </el-steps>

    <!-- Form -->
    <keep-alive>
      <introduction v-if="active==0"/>
      <information v-if="active==1"/>
      <review v-if="active==2"/>
    </keep-alive>

    <!-- Bottom of Form -->
    <el-button @click="onCancel">Cancel</el-button>
    <el-button type="success" @click="submitForm(active)">Save</el-button>
    <el-button type="primary" round @click="onPrev()">Back</el-button>
    <el-button type="primary" round @click="onNext()">Next Step</el-button>
  </div>
</template>

<script>
import introduction from './introduction'
import information from './form'
import review from './review'

export default {
  name: 'Index',
  components: { introduction, information, review },
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
      active: 0,
      formName: ''
    }
  },
  methods: {
    onSave() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    onPrev() {
      this.$message('Prev!')
      --this.active
      if (this.active < 0) this.active = 0
    },
    onNext() {
      this.$message('Next!')
      // ++this.active
      if (this.active++ > 6) this.active = 0
    },
    submitForm(step) {
      this.getFormName(step)

      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

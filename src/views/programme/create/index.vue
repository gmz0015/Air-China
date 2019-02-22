<template>
  <div class="app-container">

    <!-- Step -->
    <el-steps :active="active" align-center>
      <el-step title="Introduction"></el-step>
      <el-step title="B1" description="Programme Content"></el-step>
      <el-step title="B2" description="Reference Points and Consultation"></el-step>
      <el-step title="B3" description="Prospectus Information"></el-step>
      <el-step title="B4" description="HEAR Programme Description"></el-step>
      <el-step title="B5" description="Additional Information for Dual or Interdisciplinary Programmes"></el-step>
      <el-step title="Review"></el-step>
    </el-steps>

    <!-- Form -->
    <keep-alive>
      <introduction v-if="active==0"/>
      <B1 v-if="active==1"/>
      <B2 v-if="active==2"/>
      <B3 v-if="active==3"/>
      <B4 v-if="active==4"/>
      <B5 v-if="active==5"/>
      <review v-if="active==6"/>
    </keep-alive>


    <!-- Bottom of Form -->
    <el-button @click="onCancel">Cancel</el-button>
    <el-button type="success" @click="submitForm(active)">Save</el-button>
    <el-button type="primary" @click="onPrev()" round>Back</el-button>
    <el-button type="primary" @click="onNext()" round>Next Step</el-button>
  </div>
</template>

<script>
import introduction from './introduction'
import B1 from './B1'
import B2 from './B2'
import B3 from './B3'
import B4 from './B4'
import B5 from './B5'
import review from './review'

export default {
  name: 'index',
  components: { introduction, B1, B2, B3, B4, B5, review },
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
      --this.active;
      if (this.active < 0) this.active=0
    },
    onNext() {
      this.$message('Next!')
      // ++this.active;
      if (this.active++ > 6) this.active=0
    },
    submitForm(step) {
      getFormName(step);

      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getFormName(step) {
      if (step==1) this.formName='form_B1'
      if (step==2) this.formName='form_B2'
      if (step==3) this.formName='form_B3'
      if (step==4) this.formName='form_B4'
      if (step==5) this.formName='form_B5'
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

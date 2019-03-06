<template>
  <div class="app-container">
    <el-form ref="form_A" label-position='top' :model="form" :rules="rules_A">

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Module Details</span>
        </div>
        <div style="margin-right:10px;">
          <!-- TimeStamp -->
          <el-form-item label="Programme Title" prop="time">
            <el-input v-model="form.time"/>
          </el-form-item>

          <!-- Name of person submitting this form -->
          <el-form-item label="Name of person submitting this form" prop="person">
            <el-input v-model="form.person"/>
          </el-form-item>

          <!-- Module Code -->
          <el-form-item label="Module Code" prop="code">
            <el-input v-model="form.code"/>
          </el-form-item>

          <!-- Semester -->
          <el-form-item label="Semester" prop="semester" label-width="180px">
            <el-select v-model="form.semester" placeholder="Please select the semester">
              <el-option label="Semester 1 only" value="s_1"></el-option>
              <el-option label="Semester 2 only" value="s_2"></el-option>
              <el-option label="BOTH Semester" value="s_1_2"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-card>

      <el-card
        v-for="(assessment, index) in assessments"
        class="box-card"
        style="margin-top:25px;">
        <div slot="header" class="clearfix" text="'Assessment' + index">
          <span>Assessment {{ index }}</span>
        </div>
      </el-card>

    </el-form>
  </div>
</template>

<script >

export default {
  data() {
    return {
      form: {
        time: '',
        person: '',
        code: '',
        semester: ''
      },
      rules_A: {
        time: [
          { required: true, message: 'Please enter the programme title', trigger: 'blur' }
        ],
        person: [
          { required: true, message: 'Please enter the name of person submitting this form', trigger: 'blur' }
        ],
        code: [
          { required: true, message: 'Please enter the module code', trigger: 'blur' }
        ],
        semester: [
          { required: true, message: 'Please enter the semester', trigger: 'blur' }
        ]
      },
      assessments: [{
        format: '',
        name: '',
        percentage: '',
        date_released: '',
        date_submitted: ''
      }],
      isShare: true,
      active: 1
    }
  },
  method: {
    // submitForm() {
    //   this.$message('Error Submit!!')
    // },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain(item) {
      var index = this.form_A.domains.indexOf(item)
      if (index !== -1) {
        this.form_A.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.form_A.domains.push({
        value: '',
        key: Date.now()
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

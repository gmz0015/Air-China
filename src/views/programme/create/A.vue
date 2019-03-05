<template>
  <div class="app-container">
    <el-form ref="form_A" :model="form_A" :rules="rules_A">

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Programme Details</span>
        </div>
        <div style="margin-right:10px;">
          <!-- Programme Title -->
          <el-form-item label="Programme Title" prop="title">
            <el-input v-model="form_A.title"/>
          </el-form-item>

          <!-- Programme Type -->
          <el-form-item label="Programme Type" prop="code">
            <el-input v-model="form_A.type"/>
          </el-form-item>

          <!-- FHEQ Level -->
          <el-form-item label="FHEQ Level" prop="code">
            <el-input v-model="form_A.fheq"/>
          </el-form-item>

          <!-- Falculty -->
          <el-form-item label="Falculty" prop="code">
            <el-input v-model="form_A.falculty"/>
          </el-form-item>

          <!-- Department -->
          <el-form-item label="Department" prop="code">
            <el-input v-model="form_A.department"/>
          </el-form-item>

          <!-- Sharing Departments and Falculties -->
          <el-form-item label="Sharing Departments and Falculties" prop="code">
            <el-radio-group v-model="isShare" size="small">
              <el-radio :label="true" border>Share</el-radio>
              <el-radio :label="false" border>Not Share</el-radio>
            </el-radio-group>
            <el-input v-if="isShare" v-model="form_A.share_d_f"/>
          </el-form-item>
        </div>
      </el-card>

    </el-form>
  </div>
</template>

<script >

export default {
  data() {
    return {
      form_A: {
        title: '',
        code: '',
        jacs_code: '',
        level: '',
        qualification: '',
        qaa: '',
        intermediate: '',
        institution: '',
        faculty: '',
        department: '',
        share_d_f: ''
      },
      rules_A: {
        title: [
          { required: true, message: 'Please enter the programme title', trigger: 'blur' }
        ],
        code: [
          { required: true, message: 'Please enter the programme code', trigger: 'blur' }
        ]
      },
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

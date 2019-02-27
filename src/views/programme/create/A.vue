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
            <el-radio-group v-model="form_A.isShare" size="small" @change="onShare(label)">
              <el-radio label="false" border>Not Share</el-radio>
              <el-radio label="true" border>Share</el-radio>
            </el-radio-group>
            <el-input v-if="form_A.isShare" v-model="form_A.share_d_f"/>
          </el-form-item>
        </div>
      </el-card>

      <!-- JACS Code -->
      <el-form-item label="JACS Code" prop="code">
        <el-input v-model="form_A.jacs_code"/>
      </el-form-item>

      <!-- Level of Study -->
      <el-form-item label="Level of Study" prop="code">
        <el-input v-model="form_A.level"/>
      </el-form-item>

      <!-- Final Qualification -->
      <el-form-item label="Final Qualification" prop="code">
        <el-input v-model="form_A.qualification"/>
      </el-form-item>

      <!-- Position in the QAA Framework for Higher Education Qualifications -->
      <el-form-item label="Position in the QAA Framework for Higher Education Qualifications" prop="code">
        <el-input v-model="form_A.qaa"/>
      </el-form-item>

      <!-- Intermediate Qualification(s) -->
      <el-form-item label="Intermediate Qualification(s)" prop="code">
        <el-input v-model="form_A.intermediate"/>
      </el-form-item>

      <!-- Teaching Institution(if not Sheffield) -->
      <el-form-item label="Teaching Institution(if not Sheffield)" prop="code">
        <el-input v-model="form_A.institution"/>
      </el-form-item>

      <!-- Faculty -->
      <el-form-item label="Faculty" prop="code">
        <el-input v-model="form_A.faculty"/>
      </el-form-item>

      <!-- Department -->
      <el-form-item label="Department" prop="code">
        <el-input v-model="form_A.department"/>
      </el-form-item>

      <!-- Other Department(s) -->
      <el-form-item label="Other Department(s) involved in teaching the programme" prop="code">
        <el-input v-model="form_A.other_department"/>
      </el-form-item>

      <!-- Mode(s) of Attendance -->
      <el-form-item label="Mode(s) of Attendance" prop="code">
        <el-input v-model="form_A.attendance"/>
      </el-form-item>

      <!-- Duration of the Programme -->
      <el-form-item label="Duration of the Programme" prop="code">
        <el-input v-model="form_A.duration"/>
      </el-form-item>

      <!-- Accrediting Professional or Statutory Body -->
      <el-form-item label="Accrediting Professional or Statutory Body" prop="code">
        <el-input v-model="form_A.body"/>
      </el-form-item>

      <!-- Date of production/revision -->
      <el-form-item label="Date of production/revision" prop="code">
        <el-input v-model="form_A.date"/>
      </el-form-item>

    </el-form>
  </div>
</template>

<script >

export default {
  data() {
    return {
      form_A: {
        title: '',
        isShare: 'false',
        code: '',
        jacs_code: '',
        level: '',
        qualification: '',
        qaa: '',
        intermediate: '',
        institution: '',
        faculty: '',
        department: '',
        other_department: '',
        attendance: '',
        duration: '',
        body: '',
        date: '',
        domains: [{
          value: ''
        }]
      },
      rules_A: {
        title: [
          { required: true, message: 'Please enter the programme title', trigger: 'blur' }
        ],
        code: [
          { required: true, message: 'Please enter the programme code', trigger: 'blur' }
        ]
      },
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
    onShare(isShare) {
      console.log(isShare)
      this.form_A.isShare = isShare
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

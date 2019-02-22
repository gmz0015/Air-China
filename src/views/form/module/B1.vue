<template>
  <div class="app-container">
  <el-form ref="form_B1" :model="form_B1" :rules="rules_B1" label-width="250px">

    <!-- Programme Title -->
    <el-form-item label="Programme Title" prop="title" >
      <el-input v-model="form_B1.title"/>
    </el-form-item>

    <!-- Programme Code -->
    <el-form-item label="Programme Code" prop="code">
      <el-input v-model="form_B1.code"/>
    </el-form-item>

    <!-- JACS Code -->
    <el-form-item label="JACS Code" prop="code">
      <el-input v-model="form_B1.jacs_code"/>
    </el-form-item>

    <!-- Level of Study -->
    <el-form-item label="Level of Study" prop="code">
      <el-input v-model="form_B1.level"/>
    </el-form-item>

    <!-- Final Qualification -->
    <el-form-item label="Final Qualification" prop="code">
      <el-input v-model="form_B1.qualification"/>
    </el-form-item>

    <!-- Position in the QAA Framework for Higher Education Qualifications -->
    <el-form-item label="Position in the QAA Framework for Higher Education Qualifications" prop="code">
      <el-input v-model="form_B1.qaa"/>
    </el-form-item>

    <!-- Intermediate Qualification(s) -->
    <el-form-item label="Intermediate Qualification(s)" prop="code">
      <el-input v-model="form_B1.intermediate"/>
    </el-form-item>

    <!-- Teaching Institution(if not Sheffield) -->
    <el-form-item label="Teaching Institution(if not Sheffield)" prop="code">
      <el-input v-model="form_B1.institution"/>
    </el-form-item>

    <!-- Faculty -->
    <el-form-item label="Faculty" prop="code">
      <el-input v-model="form_B1.faculty"/>
    </el-form-item>

    <!-- Department -->
    <el-form-item label="Department" prop="code">
      <el-input v-model="form_B1.department"/>
    </el-form-item>

    <!-- Other Department(s) -->
    <el-form-item label="Other Department(s) involved in teaching the programme" prop="code">
      <el-input v-model="form_B1.other_department"/>
    </el-form-item>

    <!-- Mode(s) of Attendance -->
    <el-form-item label="Mode(s) of Attendance" prop="code">
      <el-input v-model="form_B1.attendance"/>
    </el-form-item>

    <!-- Duration of the Programme -->
    <el-form-item label="Duration of the Programme" prop="code">
      <el-input v-model="form_B1.duration"/>
    </el-form-item>

    <!-- Accrediting Professional or Statutory Body -->
    <el-form-item label="Accrediting Professional or Statutory Body" prop="code">
      <el-input v-model="form_B1.body"/>
    </el-form-item>

    <!-- Date of production/revision -->
    <el-form-item label="Date of production/revision" prop="code">
      <el-input v-model="form_B1.date"/>
    </el-form-item>

    <el-form-item
    v-for="(domain, index) in form_B1.domains"
    :label="'域名' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
  >
    <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('form_B1Form')">提交</el-button>
    <el-button @click="addDomain">新增域名</el-button>
    <el-button @click="resetForm('form_B1Form')">重置</el-button>
  </el-form-item>

    <!-- Aims -->
    <!-- <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Programme Aims</span>
      </div>
      <div>
        <el-form-item label="Aims" prop="code" label-width="100px">
          <el-input v-model="form_B1.aim"/>
        </el-form-item>
        <el-form-item
    v-for="(aim, index) in form_B1.aims"
    :label="'Aim' + index"
    :key="aim.key"
    :prop="'aims.' + index + '.content'"
    :rules="{
      required: true, message: 'It cannot be empty', trigger: 'blur'
    }"
  >
    <el-input v-model="aim.content"></el-input>
    <el-button @click.prevent="removeAim(aim)">Delete</el-button>
  </el-form-item>
  <el-form-item>
    <el-button @click="addAim">Add Aim</el-button>
  </el-form-item>
      </div>
    </el-card> -->

  </el-form>
</div>
</template>

<script >

export default {
  data() {
    return {
      form_B1: {
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
        other_department: '',
        attendance: '',
        duration: '',
        body: '',
        date: '',
        domains: [{
          value: ''
        }],
      },
      rules_B1: {
        title: [
          { required: true, message: 'Please enter the programme title', trigger: 'blur'}
        ],
        code: [
          { required: true, message: 'Please enter the programme code', trigger: 'blur'}
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
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
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
      removeDomain(item) {
        var index = this.form_B1.domains.indexOf(item)
        if (index !== -1) {
          this.form_B1.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.form_B1.domains.push({
          value: '',
          key: Date.now()
        });
      }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

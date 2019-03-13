<template>
  <div class="app-container">
    <el-form ref="form_A" :model="form" :rules="rules_A" label-position="top">

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
              <el-option label="Semester 1 only" value="s_1"/>
              <el-option label="Semester 2 only" value="s_2"/>
              <el-option label="BOTH Semester" value="s_1_2"/>
            </el-select>
          </el-form-item>
        </div>
      </el-card>

      <el-button
        size="small"
        style="margin-top:25px"
        @click="addTab(editableTabsValue)">
        Add Assessment
      </el-button>

      <el-tabs v-model="editableTabsValue" type="border-card" style="margin-top:25px" closable @tab-remove="removeTab">
        <el-tab-pane
          v-for="(assessment, index) in assessments"
          :key="assessment.table_name"
          :label="'Assessment ' + (index+1)"
          :name="assessment.table_name">
          <div style="margin-right:10px">

            <!-- Format of Assessment -->
            <el-form-item
              label="What format will this assessment take"
              prop="assessment.format">
              <el-select v-model="assessment.format" placeholder="Please select the format">
                <el-option label="MOLE quiz" value="s_1"/>
                <el-option label="Assignment" value="s_2"/>
                <el-option label="Assessed lab" value="s_1_2"/>
                <el-option label="Group Systems Design Project" value="s_1_2"/>
                <el-option label="Formal exam" value="s_1_2"/>
                <el-option label="Portfolio" value="s_1_2"/>
                <el-option label="Exercise/problem sheet" value="s_1_2"/>
                <el-option label="Presentation" value="s_1_2"/>
              </el-select>
            </el-form-item>

            <!-- Name of Assessment -->
            <el-form-item
              label="The name of this assessment">
              <el-input v-model="assessment.name"/>
            </el-form-item>

            <!-- What percentage of the module is this assessment with -->
            <el-form-item
              label="What percentage of the module is this assessment with">
              <el-input v-model="assessment.percentage"/>
            </el-form-item>

            <!-- What date will this assessment be released to students -->
            <el-form-item
              label="What date will this assessment be released to students">
              <el-input v-model="assessment.date_released"/>
            </el-form-item>

            <!-- What date will this assessment be handed in/submitted -->
            <el-form-item
              label="What date will this assessment be handed in/submitted">
              <el-input v-model="assessment.date_submitted"/>
            </el-form-item>
          </div>
        </el-tab-pane>
      </el-tabs>

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
        table_name: '1',
        format: '',
        name: '',
        percentage: '',
        date_released: '',
        date_submitted: ''
      }],
      isShare: true,
      active: 1,
      editableTabsValue: '1',
      tabIndex: 1
    }
  },
  methods: {
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

    addTab(targetName) {
      const newTabName = ++this.tabIndex + ''
      this.assessments.push({
        table_name: newTabName,
        format: '',
        name: '',
        percentage: '',
        date_released: '',
        date_submitted: ''
      })
      this.editableTabsValue = newTabName
      console.log(newTabName)
    },
    removeTab(targetName) {
      const tabs = this.assessments
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.table_name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.table_name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.assessments = tabs.filter(tab => tab.table_name !== targetName)
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

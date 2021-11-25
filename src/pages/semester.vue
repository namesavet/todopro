<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        
      </q-toolbar-title>

      <div class="settingbtn q-mr-md">
        <q-btn
          flat
          round
          dense
          @click="
            $router.push({
              name: 'settingsemester',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          text-color="white"
          icon="settings"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Semester</div>
      </div>
    </div>

    <div :key="index" v-for="(semester, index) in semesters">
      <div
        class="row items-center justify-center q-mt-xl"
        @click="
          $router.push({
            name: 'Index',
            query: {
              uid: student.uid,
              SemesterID: semester.SemesterID,
            },
          })
        "
        push
      >
        <div class="semestertitle">{{ semester.Semester_name }}</div>
      </div>
      <div class="q-mx-lg q-mt-sm">
        <q-separator color="grey" inset />
      </div>
    </div>
  </q-page>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      semesters: [],
      student: {},
      semester: {},
      getchangSemester:""
    };
  },
  mounted() {
    this.getSemester();
    this.getStudentData();
    this.getchang();
  },
  methods: {
        getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
      
    },
    async getSemester() {
      const { data } = await this.$axios.get(
        `/semester/${this.$route.query.uid}`
      );
      this.semesters = data.semester;
    },
    async getStudentData() {
      const { data } = await this.$axios.get(
        "/student/findStudentID/" + this.$route.query.uid
      );
      this.student = data.student;
    },
  },
};
</script>

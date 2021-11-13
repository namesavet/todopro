<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'profile',
              query: {
                uid: student.uid,
                SemesterID: semester.SemesterID,
              },
            })
          "
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>
    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">Profile</div>
    </div>

    <div class="row justify-center q-mb-xl">
      <div class="text-center">
        <div class="borderdash row justify-center items-center">
          <div class="profileImg">
            <q-img
              src="../image/profile.png"
              style="height: 100%; max-width: 100%; border-radius: 20%"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row q-mt-md">
          <div class="col text-right">
            <div class="titleprofile">Student ID</div>
          </div>
          <div class="col-6 text-left q-mt-sm q-ml-md">
            <div class="titleprofiledetail">{{ student.StudentID }}</div>
          </div>
        </div>
        <div class="row q-mt-md">
          <div class="col text-right">
            <div class="titleprofile">Name</div>
          </div>
          <div class="col-6 text-left q-mt-sm q-ml-md">
            <div class="titleprofiledetail">{{ student.Fullname }}</div>
          </div>
        </div>

        <div class="row q-mt-md">
          <div class="col text-right">
            <div class="titleprofile">Major</div>
          </div>
          <div class="col-6 text-left q-mt-sm q-ml-md">
            <div class="titleprofiledetail">{{ student.Major }}</div>
          </div>
        </div>

        <div class="row q-mt-md">
          <div class="col text-right">
            <div class="titleprofile">Faculty</div>
          </div>
          <div class="col-6 text-left q-mt-sm q-ml-md">
            <div class="titleprofiledetail">{{ student.Faculty }}</div>
          </div>
        </div>

        <div class="row q-mt-md">
          <div class="col text-right">
            <div class="titleprofile">Campus</div>
          </div>
          <div class="col-6 text-left q-mt-sm q-ml-md">
            <div class="titleprofiledetail">
              {{ student.University }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      student: {},
      semester: {},
    };
  },
  mounted() {
    this.getStudentData();
    this.getSemesterData();
  },
  methods: {
    async getStudentData() {
      const { data } = await axios.get(
        "http://localhost:3000/student/findStudentID/" + this.$route.query.uid
      );
      this.student = data.student;
    },
    async getSemesterData() {
      const { data } = await axios.get(
        "http://localhost:3000/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },
  },
};
</script>


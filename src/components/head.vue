<template>
  <div class="row q-pa-md row justify-center">
    <div class="text-center">
      <div
        class="borderdash row justify-center items-center"
        @click="
          $router.push({
            name: 'profile',
            query: {
              uid: student.uid,
              SemesterID: getchangSemester,
            },
          })
        "
        push
      >
        <div class="profileImg">
          <q-img
            src="../image/profile.png"
            style="height: 100%; max-width: 100%; border-radius: 20%"
          />
        </div>
      </div>
    </div>
    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="row justify-between">
        <div class="text-white text-bold" style="font-size: 24px">Hello!</div>
        <q-btn
          rounded
          color="green"
          @click="
            $router.push({
              name: 'semester',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          :label="semester.Semester_name"
          style="height: 33px"
        />
      </div>
     
      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">
          {{ student.Fullname }}
        </div>
      </div>

      <div class="row justify-end">
        <q-btn
          @click="
            $router.push({
              name: 'grade summary',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          style="font-size: 12px; height: 28px"
          rounded
          color="red"
          label="Grade summary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      student: {},
      semester: {},
      getchangSemester: " ",
    };
  },
  async mounted() {
    await this.getStudentData();

    if (this.$route.query.SemesterID) {
      await this.getSemesterName();
    } else {
      await this.getSemesterData();
    }
  },
  methods: {
    async getStudentData() {
      const { data } = await this.$axios.get(
        "/student/findStudentID/" + this.$route.query.uid
      );
      this.student = data.student;
    },
    async getSemesterData() {
      const { data } = await this.$axios.get(
        `/semester/getSemester/${this.$route.query.uid}`
      );
      console.log(data);
      this.semester = data.semester;
      console.log(this.semester);
      this.getchangSemester = data.semester.SemesterID;
    },
    async getSemesterName() {
      const { data } = await this.$axios.get(
        `/semester/findSemester/${this.$route.query.SemesterID}`
      );
      this.semester = data.semester;
      this.getchangSemester = data.semester.SemesterID;
    },
  },
};
</script>

<style scoped>
.profileImg {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 20px;
}
.borderdash {
  width: 110px;
  height: 110px;
  border: dashed gray 2px;
  border-radius: 20px;
}
</style>

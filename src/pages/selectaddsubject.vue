<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
          @click="
            $router.push({
              name: 'subject',
              query: {
                uid: student.uid,
                SemesterID: semester.SemesterID,
              },
            })
          "
          push
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Add subject
        </div>
      </div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div
        class="addsubject text-center"
        @click="
          $router.push({
            name: 'addsubject',
            query: {
              uid: student.uid,
              SemesterID: semester.SemesterID,
            },
          })
        "
        push
        style="overflow: hidden"
      >
        <q-icon class="q-mt-md" name="add" size="100px" style="color: white" />
      </div>
    </div>

    <div class="row items-center justify-center q-mt-md">
      <div class="text-center" style="color: white">Create new subject</div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div
        class="addsubjectid text-center q-mt-lg"
        @click="
          $router.push({
            name: 'addsubjectid',
            query: {
              uid: student.uid,
              SemesterID: semester.SemesterID,
            },
          })
        "
        push
        style="overflow: hidden"
      >
        <q-icon
          class="q-mt-md"
          name="search"
          size="100px"
          style="color: white"
        />
      </div>
    </div>

    <div class="row items-center justify-center q-mt-md">
      <div class="text-center" style="color: white">Add subject from ID</div>
    </div>

    <div class="row q-mt-xl">
      <q-footer elevated>
        <q-toolbar
          class="shadow-2"
          style="
            background: #30444e;
            color: white;
            bottom: 0;
            position: absolute;
            width: 100%;
            border-radius: 15px 15px 0px 0px;
          "
        >
          <q-toolbar-title class="row justify-evenly">
            <q-btn flat name="calendar" icon="calendar_today" />
            <q-btn flat name="home" icon="home" />
            <q-btn flat name="book" icon="menu_book" />
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "subject",
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

<style scoped>
</style >



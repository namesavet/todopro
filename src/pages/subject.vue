<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'Index',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          color=""
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">
            Subject
          </div>
        </div>
      </div>

      <div :key="index" v-for="(subject, index) in subjects">
        <div
          class="row justify-center"
          @click="
            $router.push({
              name: 'subjectchapter',
              query: {
                id: subject.SubjectID,
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
        >
          <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon name="school" style="color: #ffffff; font-size: 25px">
              </q-icon>
            </div>
          </div>

          <div class="col self-center q-ml-md">
            <div class="text-white">{{ subject.Subject_name }}</div>
            <div class="text-blue-grey-4">{{ subject.Teacher_name }}</div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
      </div>
    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            @click="
              $router.push({
                name: 'selectaddsubject',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
            push
            size="20px"
            round
            color=""
            icon="add"
            style="
              background-color: #40df9f;
              border-radius: 50%;
              border: 10px solid #286053;
            "
          />
        </div>
      </div>
    </div>

    <div class="row items-center justify-center">
      <div class="fontaddsubject">Add Subject</div>
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
          <q-btn
            flat
            name="calendar"
            icon="calendar_today"
            @click="
              $router.push({
                name: 'calendar',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
          <q-btn flat name="home" icon="home"  @click="
            $router.push({
              name: 'Index',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          " />
          <q-btn
            flat
            name="book"
            icon="menu_book"
            @click="
              $router.push({
                name: 'Readbook',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
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
      info: null,
      subjects: [],
      student: {},
      semester: {},
      getchangSemester:"",
    };
  },
  mounted() {
    this.getSubjectData();
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
  },
  methods: {
     getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
      
    },
    async getSubjectData() {
  
      const { data } = await this.$axios.get(
        "/subject/" + this.$route.query.SemesterID
      );
      this.subjects = data.subject;
    },
    async getStudentData() {
      const { data } = await this.$axios.get(
        "/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },

    async getSemesterData() {
      const { data } = await this.$axios.get(
        "/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },
  },
};
</script>

<style scoped>
</style >
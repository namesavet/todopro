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
          <div class="text-white text-bold" style="font-size: 30px">Score</div>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="row allscore">
        <div :key="index" v-for="(subject, index) in subjects" class="col">
          <div class="loadbar">
            <strong class="bar" :style="barscore(subject)"></strong>
          </div>
          <div class="row textsroce justify-center q-mt-sm">
            {{ countscore(subject) }}
          </div>
          <div class="row textnamesroce justify-center">
            {{ subject.Intal_name }}
          </div>
        </div>
      </div>
    </div>

    <div class="q-ml-lg q-mt-lg">
      <div :key="index" v-for="(subject, index) in subjects">
        <div
          class="row justify-center"
          @click="
            $router.push({
              name: 'subjectscore',
              query: {
                SubjectID: subject.SubjectID,
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

          <div class="q-mr-lg text-white self-center" style="overflow: hidden">
            <div class="row items-center justify-center">{{ index + 1 }}</div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />

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
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      subjects: [],
      scores: [],
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
      const { data } = await axios.get(
        "http://localhost:3000/subject/" + this.$route.query.SemesterID
      );
      this.subjects = data.subject;
      const url =
        "http://localhost:3000/score/fineSemester/" +
        this.$route.query.SemesterID;
      const scoresp = await axios.get(url);
      this.scores = scoresp.data.score;
    },
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

    async getScore() {},
    countscore(subject) {
      if (this.scores.length != 0) {
        const { SubjectID } = subject;
        const filterSubject = this.scores.filter((score) => {
          return SubjectID == score.SubjectID;
        });
        const calculateScore = filterSubject.reduce((acc, cur) => {
          return acc + cur.Get_point;
        }, 0);
        return calculateScore;
      } else {
        return 0;
      }
    },
    barscore(subject) {
      if (this.scores.length != 0) {
        const { SubjectID } = subject;
        const filterSubject = this.scores.filter((score) => {
          return SubjectID == score.SubjectID;
        });
        const calculateScore = filterSubject.reduce((acc, cur) => {
          return acc + cur.Get_point;
        }, 0);
        return "height: " + calculateScore + "%";
      }
    },
  },
};
</script>
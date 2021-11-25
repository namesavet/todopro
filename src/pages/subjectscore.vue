<template>
  <q-page class="addbackground" v-if="subject.length != 0">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'testandscore',
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
      <div class="settingbtn">
        <q-btn
          flat
          round
          dense
          @click="
            $router.push({
              name: 'settingscore',
              query: {
                SubjectID: subject.SubjectID,
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

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">
            {{ subject.Subject_name }}
          </div>
        </div>
        <div class="text-blue-grey-4">{{ subject.Teacher_name }}</div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 20px"
          >
            Score
          </div>
          <div
            class="col q-my-md q-mr-lg text-bold text-right"
            style="font-size: 20px; color: #ff565e"
          >
            {{ total }}%
          </div>
        </div>

        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="total / 100"
            class=""
            style="width: 90%; color: #ff565e"
          />
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="warringscore q-my-md text-white" >
        <div class="q-my-sm">
          <div class="row justify-center">
            {{ passEscore(subject.GradeD) }}
          </div>
          <div class="row justify-center">
            {{ passAscore(subject.GradeA) }}
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="scoregradeshadow">
        <div
          class="q-mt-md q-ml-lg text-white text-bold"
          style="font-size: 20px"
        >
          Grade
        </div>
        <div class="row gradechart">
          <div class="col-2"></div>
          <div class="col-6 text-center text-white text-bold">
            <div class="row justify-center q-mt-xl q-mr-sm">
              {{ subject.GradeA }}%
            </div>
            <div class="row justify-center q-mt-sm q-mr-sm">
              {{ subject.GradeB }}%
            </div>
            <div class="row justify-center q-mt-md q-mr-sm">
              {{ subject.GradeC }}%
            </div>
            <div class="row justify-center q-mt-md q-mr-sm">
              {{ subject.GradeD }}%
            </div>
            <div class="row justify-center q-mt-sm q-mr-sm">
              less than {{ subject.GradeD }}%
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :key="index" v-for="(score, index) in scores">
      <div class="row justify-center">
        <div class="score">
          <div class="row">
            <div
              class="col q-my-md q-ml-lg text-white text-bold"
              style="font-size: 16px"
            >
              {{ score.Score_title }}
            </div>
            <div
              class="col q-my-md q-mr-lg text-white text-bold text-right"
              style="font-size: 16px"
            >
              {{ score.Get_point }}/{{ score.Full_point }}
            </div>
          </div>
          <div class="row justify-center">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="score.Get_point / score.Full_point"
              color="white"
              class=""
              style="width: 90%"
            />
          </div>
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
          <q-btn
            flat
            name="home"
            icon="home"
            @click="
              $router.push({
                name: 'Index',
                query: {
                  uid: student.uid,
                  SemesterID: getchangSemester,
                },
              })
            "
          />
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
      scores: [],
      subject: {},
      progresss: [],
      student: {},
      semester: {},
      getchangSemester: "",
      passD: 0,
      passA: 0,
      textpassD: 0,
      textpassA: 0,
    };
  },
  mounted() {
    this.getSubjectData();
    this.getScore();
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
    this.passEscore();
  },
  methods: {
    getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
    },
    async getSubjectData() {
      const resp = await this.$axios.get(
        "/subject/findsubject/" +
          this.$route.query.SubjectID
      );
      this.subject = resp.data.subject;
      
      const scoresp = await this.$axios.get("/score/" + this.$route.query.SubjectID);
      this.scores = scoresp.data.score;
    },
    async getScore() {},
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
    passEscore(GradeD) {
      this.passD = GradeD;
      if (this.passD - this.total < 0) {
        return "You passed grade E";
      } else {
        this.textpassD = this.passD - this.total;
        return "You must score " + this.textpassD + " points to pass a E";
      }
    },
    passAscore(GradeA) {
      this.passA = GradeA;
      if (this.passA - this.total < 0) {
        return "Now You get grade A";
      } else {
        this.textpassA = this.passA - this.total;
        return "grade and "+this.textpassA + " points to A grade";
      }
    },
  },

  computed: {
    total: function () {
      return this.scores.reduce(function (total, score) {
        return total + score.Get_point;
      }, 0);
    },
  },
};
</script>




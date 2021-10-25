<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Index' })"
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
                id: subject.SubjectID,
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
          <q-btn flat name="calendar" icon="calendar_today" />
          <q-btn flat name="home" icon="home" />
          <q-btn flat name="book" icon="menu_book" />
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
    };
  },
  mounted() {
    this.getSubjectData();
  },
  methods: {
    async getSubjectData() {
      const { data } = await axios.get(
        "http://localhost:3000/subject/72100d56-21ae-42fd-8167-0b5c49c68b1d"
      );
      this.subjects = data.subject;
      const url =
        "http://localhost:3000/score/fineSemester/72100d56-21ae-42fd-8167-0b5c49c68b1d";
      const scoresp = await axios.get(url);
      this.scores = scoresp.data.score;
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
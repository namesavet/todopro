<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'testandscore' })"
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
          @click="$router.push({ name: 'settingscore' })"
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
            {{ subjects[0].Subject_name }}
          </div>
        </div>
        <div class="text-blue-grey-4">{{ subjects[0].Teacher_name }}</div>
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
      <div class="warringscore q-my-md text-white">
        <div class="q-my-sm">
          <div class="row justify-center">
            You must score {{ subjects[0].GradeD - total }} points to pass a E
          </div>
          <div class="row justify-center">
            grade and {{ subjects[0].GradeA - total }} points to A grade
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
              {{ subjects[0].GradeA }}%
            </div>
            <div class="row justify-center q-mt-sm q-mr-sm">
              {{ subjects[0].GradeB }}%
            </div>
            <div class="row justify-center q-mt-md q-mr-sm">
              {{ subjects[0].GradeC }}%
            </div>
            <div class="row justify-center q-mt-md q-mr-sm">
              {{ subjects[0].GradeD }}%
            </div>
            <div class="row justify-center q-mt-sm q-mr-sm">
              less than {{ subjects[0].GradeD }}%
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
      progressall: 0.28,
      progress1: 0.5,
      progress2: 0.66,
      progress3: 1,
      scores: [],
      subjects: [],
      progresss: [],
    };
  },
  mounted() {
    this.getSubjectData();
    this.getScore();
  },
  methods: {
    async getSubjectData() {
      const resp = await axios.get(
        "http://localhost:3000/subject/findsubject/e30dad8d-c7f2-4e09-a654-3d4b07838e0c"
      );
      this.subjects = resp.data.subject;
      const url =
        "http://localhost:3000/score/e30dad8d-c7f2-4e09-a654-3d4b07838e0c";
      const scoresp = await axios.get(url);
      this.scores = scoresp.data.score;
    },
    async getScore() {},
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




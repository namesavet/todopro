<template>
  <q-page class="addbackground" v-if="subject.length != 0">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
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
            {{ subject.Subject_name }}
          </div>
        </div>
        <div class="text-blue-grey-4">{{ subject.Teacher_name }}</div>
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
              class="col q-my-md q-mr-sm text-white text-bold text-right"
              style="font-size: 16px"
            >
              {{ score.Get_point }}/{{ score.Full_point }}
            </div>
            <div class="col-1 q-mt-sm q-mr-md">
              <q-btn
                flat
                round
                dense
                text-color="red"
                icon="delete_forever"
                @click="Deletechapter(index, score.ScoreID)"
              />
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

    <div id="app" class="container">
      <div class="work-experiences">
        <div class="form-row" v-for="(input, index) in score" :key="index">
          <form @submit="submitScore(index)">
            <div class="row justify-center">
              <div class="scoreadd">
                <div class="row">
                  <div class="col">
                    <div
                      class="text-white text-bold q-ml-lg"
                      style="font-size: 16px; height: 20%"
                    >
                      <q-input
                        :input-style="{ color: 'white' }"
                        v-model="input.scoreName"
                        placeholder="Name of score"
                        color="white"
                        label-color="grey"
                        required
                      />
                    </div>

                    <div
                      class="row text-white text-bold q-ml-lg q-mt-xl"
                      style="font-size: 16px; height: 100%"
                    >
                      <div class="col">
                        <q-input
                          :input-style="{ color: 'white' }"
                          v-model="input.GetPoin"
                          placeholder="Get point"
                          mask="##"
                          color="white"
                          label-color="grey"
                          required
                        />
                      </div>
                      <div class="col q-ml-lg">
                        <q-input
                          :input-style="{ color: 'white' }"
                          v-model="input.FullPoin"
                          placeholder="Full point"
                          mask="##"
                          color="white"
                          label-color="grey"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-2 items-center text-center">
                    <div
                      class="row q-mt-xl justify-center"
                      style="margin-top: 62px"
                    >
                      <q-btn
                        round
                        dense
                        text-color="white"
                        icon="done"
                        class=""
                        style="background-color: #40df9f"
                        type="submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
  name: "score",
  data() {
    return {
      score: [
        {
          scoreName: "",
        },
      ],
      scores: [],
      subject: {},
      student: {},
      semester: {},
      getchangSemester: "",
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
    addScore() {
      this.score.push({
        scoreName: "",
      });
    },

   async submitScore(index) {
      await this.$axios.post("/score/create ", {
          Score_title: this.score[index].scoreName,
          Get_point: this.score[index].GetPoin,
          Full_point: this.score[index].FullPoin,
          SubjectID: this.$route.query.SubjectID,
          uid: this.$route.query.uid,
          SemesterID: this.$route.query.SemesterID,
        })
        .then((response) => {
          this.scores.push(response.data.data);
          this.score[index].scoreName = "";
          this.score[index].GetPoin = "";
          this.score[index].FullPoin = "";
        });
    },
    async Deletechapter(index, ScoreID) {
     await this.$axios.delete(`/score/delete/${ScoreID}`)
        .then((response) => {
          console.log(response);
          this.scores = this.scores.filter((data, i) => i != index);
        });
    },
    async getSubjectData() {
      const { data } = await this.$axios.get(
        `/subject/findsubject/${this.$route.query.SubjectID}`
      );
      this.subject = data.subject;
     
      const scoresp = await this.$axios.get("/score/" + this.$route.query.SubjectID);
      this.scores = scoresp.data.score;
    },
  },
};
</script>

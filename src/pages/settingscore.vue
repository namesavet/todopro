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
                id: subject.SubjectID,
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
              name: 'subjectscore',
              query: {
                id: subject.SubjectID,
              },
            })
          "
          push
          text-color="white"
          icon="done"
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
      <form>
        <div class="work-experiences">
          <div class="form-row" v-for="(input, index) in score" :key="index">
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
                          color="white"
                          label-color="grey"
                        />
                      </div>
                      <div class="col q-ml-lg">
                        <q-input
                          :input-style="{ color: 'white' }"
                          v-model="input.FullPoin"
                          placeholder="Full point"
                          color="white"
                          label-color="grey"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-2 items-center text-center">
                    <div class="row q-mt-xl justify-center">
                      <q-btn
                        @click="submitScore(index)"
                        round
                        dense
                        text-color="white"
                        icon="done"
                        class=""
                        style="background-color: #40df9f"
                      />
                    </div>
                    <div class="row q-mt-md justify-center">
                      <q-btn
                        @click="removeField(index, score)"
                        round
                        dense
                        text-color="white"
                        icon="clear"
                        class=""
                        style="background-color: #ff5656"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            @click="addScore"
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

      <div class="row items-center justify-center">
        <div class="fontaddsubject" style="color: #40df9f">Add Score</div>
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
    };
  },
  mounted() {
    this.getSubjectData();
  },
  methods: {
    addScore() {
      this.score.push({
        scoreName: "",
      });
    },
    removeField(index, score) {
      //type.splice(index, 1);
      score.splice(index, 1);
    },

    submitScore(index) {
      axios
        .post("http://localhost:3000/score/create ", {
          Score_title: this.score[index].scoreName,
          Get_point: this.score[index].GetPoin,
          Full_point: this.score[index].FullPoin,
          SubjectID: this.$route.query.id,
          StudentID: "6130613034",
          SemesterID: "72100d56-21ae-42fd-8167-0b5c49c68b1d",
        })
        .then((response) => {
          this.scores.push(response.data.data);
          this.score[index].scoreName = "";
          this.score[index].GetPoin= "";
          this.score[index].FullPoin = "";
        });
    },
    Deletechapter(index, ScoreID) {
      axios
        .delete(`http://localhost:3000/score/delete/${ScoreID}`)
        .then((response) => {
          console.log(response);
          this.scores = this.scores.filter((data, i) => i != index);
        });
    },
   async getSubjectData() {
      const { data } = await axios.get(
        `http://localhost:3000/subject/findsubject/${this.$route.query.id}`
      );
      this.subject = data.subject;
      const url = "http://localhost:3000/score/" + this.$route.query.id;
      const scoresp = await axios.get(url);
      this.scores = scoresp.data.score;
    },
  },
};
</script>

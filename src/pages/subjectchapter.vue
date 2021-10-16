<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'subject' })"
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
          @click="$router.push({ name: 'editsubjectchapter',query: {
                id: subject.SubjectID,
              }, })"
          push
          round
          dense
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
      <div class="scoregrade">
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

    <div class="row justify-center items-center text-bold q-mt-sm">
      <div class="testtext row justify-center items-center">
        <div class="col-4 q-ml-sm">Midterm exam</div>
        <div class="col-4">{{ formatDate(subject.Date_midterm_exam) }}</div>
        <div class="col-1">{{ subject.Score_midterm }}%</div>
      </div>
    </div>

    <div class="row justify-center items-center text-bold">
      <div class="testtext row justify-center items-center">
        <div class="col-4 q-ml-sm">Final exam</div>
        <div class="col-4">{{ formatDate(subject.Date_final_exam) }}</div>
        <div class="col-1">{{ subject.Score_final }}%</div>
      </div>
    </div>
    <div class="row justify-center text-bold">
      <div class="gradewanttext">
        The grade you want is {{ subject.Desired_grade }}
      </div>
    </div>

    <div class="q-my-md q-ml-md text-white text-bold" style="font-size: 25px">
      Chapter
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div :key="index" v-for="(chapter, index) in chapters">
        <div class="row justify-center">
          <div class="profilechap text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">
              {{ index + 1 }}
            </div>
          </div>
          <div class="col-7 self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              {{ chapter.Chapter_name }}
            </div>
          </div>
          <div class="col q-mt-sm q-mr-lg text-right">
            <q-btn
              flat
              round
              dense
              @click="Deletechapter()"
              text-color="red"
              icon="delete_forever"
            />
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
      </div>

      <div id="app" class="container">
        <form>
          <div class="form-row" v-for="(input, index) in chapter" :key="index">
            <div class="row justify-center">
              <div class="profilechap text-bold" style="overflow: hidden">
                <div class="chapter row items-center justify-center q-mt-sm">
                  {{ countchapter + 1 }}
                </div>
              </div>
              <div class="col self-center text-bold q-ml-lg">
                <div class="text-white text-bold" style="font-size: 16px">
                  <q-input
                    :input-style="{ color: 'white' }"
                    color="white"
                    v-model="input.chapterName"
                    label-color="grey"
                    placeholder="Chapter name"
                  />
                </div>
              </div>
              <div class="q-mr-sm q-mt-sm">
                <q-btn
                  @click="submitchapter()"
                  round
                  dense
                  text-color="white"
                  icon="done"
                  class=""
                  style="background-color: #40df9f"
                />
              </div>
              <div class="q-mr-sm q-mt-sm">
                <q-btn
                  @click="removeField(index, chapter)"
                  round
                  dense
                  text-color="white"
                  icon="clear"
                  class=""
                  style="background-color: #ff5656"
                />
              </div>
            </div>
            <div class="q-mr-lg q-my-lg">
              <q-separator color="grey" inset="item" />
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            @click="addChapter"
            type="button"
            class="btn btn-secondary"
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

      <div class="row items-center justify-center">
        <div class="fontaddsubject">Add Chapter</div>
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
import { date } from "quasar";
export default {
  name:"subject",
  data() {
    return{
    chapter: [
      {
        chapterName:"",
      },
    ],
    chapters: [],
    subject:{},
    countchapter: 0,
  };
},
  mounted() {
    this.getSubjectData();
  },

  methods: {
    addChapter() {
      this.chapter.push({
        chapterName: "",
      });
    },
    removeField(index, chapter) {
      //type.splice(index, 1);
      chapter.splice(index, 1);
    },

    submitchapter() {
      axios
        .post("http://localhost:3000/chapter/create ", {
          Chapter_name: this.chapterName,
          Status: false,
          SubjectID: "847f4921-3408-4abe-a2a4-96fc01f49aaa",
          StudentID: "6130613034",
          SemesterID: "72100d56-21ae-42fd-8167-0b5c49c68b1d",
        })
        .then((response) => {
          console.log(response);
        });
      // const data = {
      //   chapter: this.chapter,
      // };
      // alert(JSON.stringify(data, null, 2));
    },
    Deletechapter() {
      axios
        .delete(`http://localhost:3000/chapter/${this.chapter.ChapterID}`)
        .then((response) => {
          console.log(response);
        });
    },
    formatDate(day) {
      return date.formatDate(day, "DD MMM YYYY");
    },

    async getSubjectData() {
      const {data} = await axios.get(
        "http://localhost:3000/subject/findsubject/" + this.$route.query.id
      );
      this.subject = data.subject;


      const url =
        "http://localhost:3000/chapter/847f4921-3408-4abe-a2a4-96fc01f49aaa";
      const chaptersp = await axios.get(url);
      this.chapters = chaptersp.data.chapter;
      this.countchapter = this.chapters.length;
    },
  
  },
};
</script>


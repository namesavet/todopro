<template>
  <q-page class="addbackground" v-if="subject.length != 0">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'subject',
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
          @click="
            $router.push({
              name: 'editsubjectchapter',
              query: {
                id: subject.SubjectID,
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
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
              @click="Deletechapter(index, chapter.ChapterID)"
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
                  New
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
              <div class="q-mr-md q-mt-sm">
                <q-btn
                  @click="submitchapter(index)"
                  round
                  dense
                  text-color="white"
                  icon="done"
                  class=""
                  style="background-color: #40df9f"
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
import { date } from "quasar";
export default {
  name: "subject",
  name: "chapter",
  data() {
    return {
      chapter: [
        {
          chapterName: "",
        },
      ],
      chapters: [],
      subject: {},
      countchapter: 0,
      student: {},
      semester: {},
      getchangSemester:"",
    };
  },
  mounted() {
    this.getSubjectData();
    this.getChapterData();
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
  },

  methods: {
      getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
    console.log(this.getchangSemester);
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
    addChapter() {
      // this.countchapter + 1 ;
      this.chapter.push({
        chapterName: "",
      });
    },


    submitchapter(index) {
      axios
        .post("http://localhost:3000/chapter/create ", {
          Chapter_name: this.chapter[index].chapterName,
          Status: false,
          SubjectID: this.$route.query.id,
          uid: this.$route.query.uid,
          SemesterID: this.$route.query.SemesterID,
        })
        .then((response) => {
          this.chapters.push(response.data.data);
          this.chapter[index].chapterName = "";
        });
    },
    Deletechapter(index, ChapterID) {
      axios
        .delete(`http://localhost:3000/chapter/delete/${ChapterID}`)
        .then((response) => {
          console.log(response);
          this.chapters = this.chapters.filter((data, i) => i != index);
        });
    },
    formatDate(day) {
      return date.formatDate(day, "DD MMM YYYY");
    },

    async getSubjectData() {
      const { data } = await axios.get(
        `http://localhost:3000/subject/findsubject/${this.$route.query.id}`
      );
      this.subject = data.subject;
    },

    async getChapterData() {
      const { data } = await axios.get(
        `http://localhost:3000/chapter/findchapter/${this.$route.query.id}`
      );
      this.chapters = data.chapter;
      this.countchapter = this.chapters.length;
    },
  },
};
</script>


<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
          @click="$router.push({ name: 'selectaddsubject' })"
          push
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Add subject from ID
        </div>
      </div>
    </div>

    <div class="justify-center q-px-lg"  >
      <q-input v-model="search"  rounded outlined type="text" bg-color="white"  >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    </div>
    

    <div :key="index" v-for="(subject, index) in filteredSubject">
      <div class="row justify-center">
        <div class="score row justify-center items-center">
          <div class="profilesubject q-ml-md" style="overflow: hidden">
            <div class="profileicon">
              <q-icon name="school" style="color: #ffffff; font-size: 25px">
              </q-icon>
            </div>
          </div>
          <div v-if="subject" class="col self-center q-ml-md">
            <div class="text-white">{{ subject.Subject_name }} </div>
            <div class="text-white">{{ subject.IDsubject }}</div>
            <div class="text-blue-grey-4">{{ subject.Teacher_name }}</div> 
          </div>
          <div class="items-center q-mr-md">
            <q-btn
              @click="clickSubject(subject.SubjectID),submitSubjectID() "
              round
              dense
              text-color="white"
              :icon="checkAddSubject(subject.SubjectID) ? 'done' : 'add'"
              :style="
                checkAddSubject(subject.SubjectID)
                  ? 'background-color: #F2C037'
                  : 'background-color: #40df9f'
              "
              class=""
            />
          </div>
        </div>
      </div>
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
import { ref } from "vue";
export default {
  data() {
    return {
      subjects: [],
      chapters: [],
      search: "",
      filteredSubject: [],
      listAddSubject: [],
    };
  },
  mounted() {
    this.getSubjectData();
  },
  methods: {
    async getSubjectData() {
      const resp = await axios.get(`http://localhost:3000/subject/`);
      this.subjects = resp.data.subject;
      const url = `http://localhost:3000/chapter/findchapter/${this.$route.query.id}`;
      const chaptersp = await axios.get(url);
      this.chapters = chaptersp.data.chapter;
      this.filteredSubject = this.subjects;
    },
    clickSubject(SubjectId) {
      this.listAddSubject.push(SubjectId);
    },
    checkAddSubject(SubjectId) {
      if (this.listAddSubject.includes(SubjectId)) {
        return true;
      } else {
        return false;
      }
    },

    submitSubjectID() {
      axios
        .post(`http://localhost:3000/subject/createWithId/`, {
          Subject_name: this.subject.Subject_name,
          Intal_name: this.subject.Intal_name,
          Teacher_name: this.subject.Teacher_name,
          IDsubject: this.subject.IDsubject,
          Credit: this.subject.Credit,
          GradeA: this.subject.GradeA,
          GradeBplus: this.subject.GradeBplus,
          GradeB: this.subject.GradeB,
          GradeCplus: this.subject.GradeCplus,
          GradeC: this.subject.GradeC,
          GradeDplus: this.subject.GradeDplus,
          GradeD: this.subject.GradeD,
          Date_midterm_exam: this.subject.Date_midterm_exam,
          Date_final_exam: this.subject.Date_final_exam,
          Score_midterm: this.subject.Score_midterm,
          Score_final: this.subject.Score_final,
          Desired_grade: this.subject.Desired_grade,
          Chapter_name: this.chapter.Chapter_name,
          Status: false,
          SubjectID: this.$route.query.id,
          StudentID: "6130613034",
          SemesterID: "72100d56-21ae-42fd-8167-0b5c49c68b1d",
        })
        .then((response) => {
          console.log(response);
         
        });
    },
  },
  watch: {
    search: function (value) {
      this.filteredSubject = this.subjects.filter((subject) => {
        return subject.IDsubject.match(value);
      });
    },
  },
};
</script>


<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
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

    <div class="justify-center q-px-lg">
      <q-input v-model="search" rounded outlined type="text" bg-color="white">
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
            <div class="text-white">{{ subject.Subject_name }}</div>
            <div class="text-white">{{ subject.IDsubject }}</div>
            <div class="text-blue-grey-4">{{ subject.Teacher_name }}</div>
          </div>
          <div class="items-center q-mr-md">
            <q-btn
              @click="clickSubject(subject.SubjectID)"
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
              @click="$router.push({
                  name: 'Index',
                  query: {
                    uid: student.uid,
                    SemesterID: getchangSemester,
                  },
                })"
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
                })"
            />
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
    async getSubjectData() {
      const resp = await this.$axios.get(`/subject/`);
      this.subjects = resp.data.subject;
      const chaptersp = await this.$axios.get(`/chapter/findchapter/${this.$route.query.id}`);
      this.chapters = chaptersp.data.chapter;
      this.filteredSubject = this.subjects;
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
    clickSubject(SubjectId) {
      this.listAddSubject.push(SubjectId);
      this.submitSubjectID(SubjectId);
    },
    checkAddSubject(SubjectId) {
      if (this.listAddSubject.includes(SubjectId)) {
        return true;
      } else {
        return false;
      }
    },

    async submitSubjectID(SubjectID) {
      await this.$axios.post(
        `/subject/createWithId/${SubjectID}/${this.$route.query.uid}/${this.$route.query.SemesterID}`
      );
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


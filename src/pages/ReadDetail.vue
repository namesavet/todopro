<template>
  <q-page class="addbackground" v-if="subject.length != 0">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'Readbook',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div>
      <div class="row">
        <div class="col q-ml-md q-mt-xs q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">
            {{ subject.Subject_name }}
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-md">
          <div class="text-bold" style="font-size: 22px; color: #96a7af">
            {{ subject.Teacher_name }}
          </div>
        </div>
      </div>

      <div class="namebook" style="overflow: hidden">
        <div class="row justify-center">
          <div class="col">
            <div
              class="statuspic q-ml-lg q-mt-lg"
              :style="bgstatuscolor((readtrue / countchapter) * 100)"
            >
              <div class="row items-center justify-center q-mt-md">
                <q-icon
                  :name="iconstatus((readtrue / countchapter) * 100)"
                  class=""
                  size="24px"
                  style="color: white"
                />
              </div>
            </div>
          </div>
          <div class="col-8">
            <div class="row q-mt-md">
              <div class="col">
                <div class="titlesubject">{{ subject.Subject_name }}</div>
              </div>
              <div class="col-3">
                <div
                  class="percentext"
                  :style="textstatuscolor((readtrue / countchapter) * 100)"
                >
                  {{ processnotnan() }}%
                </div>
              </div>
            </div>
            <div class="row q-mt-lg">
              <q-linear-progress
                dark
                rounded
                size="16px"
                :value="processbarnotnan()"
                :color="statuscolor((readtrue / countchapter) * 100)"
                class=""
                style="width: 90%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row q-ml-xl q-mt-lg">
        <div class="q-mt-xs">
          <div class="redcircle"></div>
        </div>
        <div class="col-4 q-mx-sm">
          <div class="exam">Midterm exam</div>
        </div>
        <div class="col-4 q-mx-xs">
          <div class="exam">{{ formatDate(subject.Date_midterm_exam) }}</div>
        </div>
        <div class="col">
          <div class="exam">{{ subject.Score_midterm }}%</div>
        </div>
      </div>

      <div class="row q-ml-xl q-mt-sm justify-around">
        <div class="q-mt-xs">
          <div class="redcircle"></div>
        </div>
        <div class="col-4 q-mx-sm">
          <div class="exam">Final exam</div>
        </div>
        <div class="col-4 q-mx-xs">
          <div class="exam">{{ formatDate(subject.Date_final_exam) }}</div>
        </div>
        <div class="col">
          <div class="exam">{{ subject.Score_final }}%</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col q-my-md q-ml-md text-white text-bold"
        style="font-size: 25px"
      >
        Chapter
      </div>
      <div class="col-2 q-mt-md">
        <q-icon
          name="chrome_reader_mode"
          class="q-ml-sm"
          size="24px"
          style="color: #42ff4a"
        />
      </div>
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div :key="index" v-for="(chapter, index) in chapters">
        <div class="row justify-center">
          <div
            class="profilechap text-bold"
            :style="bgstatuscolor((readtrue / countchapter) * 100)"
          >
            <div class="chapter row items-center justify-center q-mt-sm">
              {{ index + 1 }}
            </div>
          </div>

          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              {{ chapter.Chapter_name }}
            </div>
          </div>
          <div class="col-2">
            <q-checkbox
              name="read"
              v-model="chapter.Status"
              color="green"
              v-on:click.native="updateStatusChapter(chapter)"
            />
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
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
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { date } from "quasar";
export default {
  data() {
    return {
      process0: 0,
      chapters: [],
      subject: {},
      countchapter: 0,
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
    formatDate(day) {
      return date.formatDate(day, "DD MMM YYYY");
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
    async getSubjectData() {
      const resp = await this.$axios.get(
        `/subject/findsubject/${this.$route.query.id}`
      );
      this.subject = resp.data.subject;

      const chaptersp = await this.$axios.get(
        `/chapter/findchapter/${this.$route.query.id}`
      );
      this.chapters = chaptersp.data.chapter;
      this.countchapter = this.chapters.length;
    },

    async updateStatusChapter(chapter) {
      const { ChapterID, Status } = chapter;
      await this.$axios.put(`/chapter/updateStatus/${ChapterID}`, {
        Status: Status,
      });
    },

    statuscolor(allstatus, statuscolor) {
      if (66.66 < allstatus) {
        statuscolor = "green";
      } else if (33.33 < allstatus && allstatus <= 66.66) {
        statuscolor = "yellow";
      } else {
        statuscolor = "red";
      }

      return statuscolor;
    },
    processnotnan() {
      const process = (this.readtrue / this.countchapter) * 100;

      if (Number.isNaN(process) == true) {
        return this.process0;
      } else {
        return process.toFixed(0);
      }
    },
    processbarnotnan() {
      const process = this.readtrue / this.countchapter;

      if (Number.isNaN(process) == true) {
        return this.process0;
      } else {
        return process;
      }
    },

    textstatuscolor: function (allstatus, textstatuscolor) {
      if (66.66 < allstatus) {
        textstatuscolor = "color:#42ff4a";
      } else if (33.33 < allstatus && allstatus <= 66.66) {
        textstatuscolor = "color:#ffc542";
      } else {
        textstatuscolor = "color:#ff575f";
      }

      return textstatuscolor;
    },

    bgstatuscolor: function (allstatus, bgstatuscolor) {
      if (66.66 < allstatus) {
        bgstatuscolor = "background:#42ff4a";
      } else if (33.33 < allstatus && allstatus <= 66.66) {
        bgstatuscolor = "background:#ffc542";
      } else {
        bgstatuscolor = "background:#ff575f";
      }

      return bgstatuscolor;
    },

    iconstatus: function (allstatus, iconstatus) {
      if (66.66 < allstatus) {
        iconstatus = "star";
      } else if (33.33 < allstatus && allstatus <= 66.66) {
        iconstatus = "north";
      } else {
        iconstatus = "south";
      }

      return iconstatus;
    },
  },
  computed: {
    readtrue: function () {
      return this.chapters.reduce(function (readtrue, chapter) {
        if (chapter.Status == true) {
          readtrue = readtrue + 1;
        }
        return readtrue;
      }, 0);
    },
  },
};
</script>

<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          @click="
            $router.push({
              name: 'Index',
              query: {
                uid: student.uid,
                SemesterID: semester.SemesterID,
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

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Read a book
        </div>
      </div>
    </div>

    <div class="items-center row justify-center">
      <div class="readprogress" style="overflow: hidden">
        <div class="row justify-center q-mt-sm q-px-md">
          <div class="col items-center">
            <div style="width: 90%; height: 90%">
              <canvas
                id="my-chart"
                class=""
                style="display: block;
                   width: 90%;
                    height: 90%;
                      }"
              >
              </canvas>
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col q-ml q-mt-sm q-gutter-xs">
                <div class="text-white text-bold" style="font-size: 18px">
                  Read progress
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-1 q-mt-xs">
                <div class="welldonetier"></div>
              </div>
              <div class="col-10 q-ml-sm">
                <div class="texttier">welldone read</div>
              </div>
            </div>

            <div class="row">
              <div class="col-1 q-mt-xs">
                <div class="goodtier"></div>
              </div>
              <div class="col-10 q-ml-sm">
                <div class="texttier">good read</div>
              </div>
            </div>

            <div class="row">
              <div class="col-1 q-mt-xs">
                <div class="badtier"></div>
              </div>
              <div class="col-10 q-ml-sm">
                <div class="texttier">not good</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div :key="index" v-for="(subject, index) in subjects">
      <div
        class="namebook q-ml-lg q-mt-lg"
        @click="
          $router.push({
            name: 'ReadDetail',
            query: {
              id: subject.SubjectID,
              uid: student.uid,
              SemesterID: semester.SemesterID,
            },
          })
        "
        push
        style="overflow: hidden"
      >
        <div class="row justify-center">
          <div class="col">
            <div
              class="statuspicread q-ml-lg q-mt-lg"
              :style="
                bgstatuscolor(
                  (countreadtrue(subject.SubjectID) /
                    countread(subject.SubjectID)) *
                    100
                )
              "
            >
              <div class="row items-center justify-center q-mt-md">
                <q-icon
                  :name="
                    iconstatus(
                      (countreadtrue(subject.SubjectID) /
                        countread(subject.SubjectID)) *
                        100
                    )
                  "
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
                  :style="
                    textstatuscolor(
                      (countreadtrue(subject.SubjectID) /
                        countread(subject.SubjectID)) *
                        100
                    )
                  "
                >
                  {{ processnotnan(subject.SubjectID) }}%
                </div>
              </div>
            </div>
            <div class="row q-mt-lg">
              <q-linear-progress
                dark
                rounded
                size="16px"
                :value="processbarnotnan(subject.SubjectID)"
                :color="
                  statuscolor(
                    (countreadtrue(subject.SubjectID) /
                      countread(subject.SubjectID)) *
                      100
                  )
                "
                class=""
                style="width: 90%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />

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
import Chart from "chart.js";
import axios from "axios";
export default {
  data() {
    return {
      subjects: [],
      chapters: [],
      process0: 0,
      student: {},
      semester: {},
    };
  },
  components: {},
  mounted: async function () {
    await this.getSubjectData();
    this.getchart();
    this.getStudentData();
    this.getSemesterData();
  },

  methods: {
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
    async getSubjectData() {
      const { data } = await axios.get(
        "http://localhost:3000/subject/" + this.$route.query.SemesterID
      );
      this.subjects = data.subject;
      const url =
        "http://localhost:3000/chapter/findchapterSemester/" +
        this.$route.query.SemesterID;
      const chaptersp = await axios.get(url);
      this.chapters = chaptersp.data.chapter;
    },
    countreadtrue(subject) {
      if (this.chapters.length != 0) {
        const SubjectID = subject;

        const filterSubject = this.chapters.filter((chapter) => {
          return SubjectID == chapter.SubjectID;
        });

        const calculatereadtrue = filterSubject.reduce((acc, cur) => {
          if (cur.Status == true) {
            acc = acc + 1;
          }
          return acc;
        }, 0);
        return calculatereadtrue;
      }
    },
    countread(subject) {
      if (this.chapters.length != 0) {
        const SubjectID = subject;

        const filterSubject = this.chapters.filter((chapter) => {
          return SubjectID == chapter.SubjectID;
        });
        return filterSubject.length;
      }
    },

    statuscolor: function (allstatus, statuscolor) {
      if (66.66 < allstatus) {
        statuscolor = "green";
      } else if (33.33 < allstatus && allstatus <= 66.66) {
        statuscolor = "yellow";
      } else {
        statuscolor = "red";
      }
      return statuscolor;
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
    processnotnan(SubjectID) {
      const process =
        (this.countreadtrue(SubjectID) / this.countread(SubjectID)) * 100;

      if (Number.isNaN(process) == true) {
        return this.process0;
      } else {
        return process.toFixed(0);
      }
    },
    processbarnotnan(SubjectID) {
      const process = this.countreadtrue(SubjectID) / this.countread(SubjectID);

      if (Number.isNaN(process) == true) {
        return this.process0;
      } else {
        return process;
      }
    },
    getchart() {
      const calculateColor = this.subjects.map((subject) => {
        const point =
          (this.countreadtrue(subject.SubjectID) /
            this.countread(subject.SubjectID)) *
          100;
        if (66.66 < point) {
          return "green";
        } else if (33.33 < point && point <= 66.66) {
          return "yellow";
        } else {
          return "red";
        }
      });
      const countRed = calculateColor.filter((color) => color == "red");
      const countYellow = calculateColor.filter((color) => color == "yellow");
      const countGreen = calculateColor.filter((color) => color == "green");
      const data = [
        countYellow.length / calculateColor.length,
        countGreen.length / calculateColor.length,
        countRed.length / calculateColor.length,
      ];
      var ctx = document.getElementById("my-chart");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: {
          datasets: [
            {
              label: "Page A",
              data: data,
              backgroundColor: ["#FFC542", "#3DD598", "#FF575F"],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
  },
};
</script>

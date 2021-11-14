<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'Index',
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
    <div class="row q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md text-white text-bold" style="font-size: 30px">
        Grade summary
      </div>
    </div>

    <div class="row justify-center">
      <div class="chartGradeSummary q-mr-md q-ml-md" style="overflow: hidden">
        <div class="q-pa-sm q-mt-sm" style="width: 95%; height: 95%">
          <canvas
            id="graph"
            class=""
            style="display: block;
                   width: 98%;
                    height: 98%;
                      }"
          ></canvas>
        </div>
      </div>
    </div>

    <br />

    <div :key="index" v-for="(semester, index) in semesters">
      <div class="row justify-center">
        <div class="graderow">
          <div class="row q-mt-sm">
            <div
              class="col q-ml-lg text-white text-bold"
              style="font-size: 19px"
            >
              Semesters {{ index + 1 }}
            </div>
            <div
              class="col-2 q-mr-lg q-mt-xs text-white text-bold text-right"
              style="font-size: 16px"
            >
              {{ semester.Semester_name }}
            </div>
          </div>

          <div class="q-mr-sm q-ml-sm">
            <q-separator color="grey" inset="" />
          </div>

          <div class="row q-mt-md">
            <div
              class="col q-ml-lg text-white text-bold"
              style="font-size: 16px"
            >
              Study Result Simulation
            </div>
            <div
              class="col-2 q-mr-lg text-white text-bold text-right"
              style="font-size: 16px"
            >
              {{ mydesiredGrade(semester.SemesterID) }}
            </div>
          </div>
          <div class="row">
            <div
              class="col q-ml-lg q-mt-md text-white text-bold"
              style="font-size: 16px"
            >
              Your grade
            </div>
            <div
              class="col-2 q-mr-lg text-white text-bold float-right"
              style="font-size: 16px; text-align: end"
            >
              <q-input
                :input-style="{ color: 'white' }"
                v-model="inputgrade[index]"
                color="white"
                label-color="grey"
                placeholder="0.00"
                mask="#.##"
                style="text-align: end"
                input-class="text-right text-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />
  </q-page>
</template>

<script>
import axios from "axios";
import Chart from "chart.js";
export default {
  data() {
    return {
      subjects: [],
      semesters: [],
      inputgrade: [],
      grade0: 0,
      gradeinchart: [],
      semestersName: "",
      yourgradechart: [],
      student: {},
      semester: {},
      getchangSemester: "",
    };
  },
  components: {},
  watch: {
    inputgrade(value) {
      console.log(value);
      this.yourgradechart = value.map((grade) => Number(grade));
      console.log(this.yourgradechart);
      this.getchart();
    },
  },
  mounted: async function () {
    await this.getSemesterData();
    await this.getSubjectData();
    this.getchart();
    this.getStudentData();
    this.getSemesterDataback();
    this.getchang();
  },
  methods: {
    getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
    },
    async getSemesterData() {
      const { data } = await axios.get(
        "http://localhost:3000/semester/" + this.$route.query.uid
      );
      this.semesters = data.semester;
    },
    async getSubjectData() {
      const { data } = await axios.get(
        "http://localhost:3000/subject/studentsubject/" + this.$route.query.uid
      );
      this.subjects = data.subject;
    },
    async getStudentData() {
      const { data } = await axios.get(
        "http://localhost:3000/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },
    async getSemesterDataback() {
      const { data } = await axios.get(
        "http://localhost:3000/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },

    countCredit(semester) {
      if (this.subjects.length != 0) {
        const SemesterID = semester;

        const filterSemester = this.subjects.filter((subject) => {
          return SemesterID == subject.SemesterID;
        });
        const countallCredit = filterSemester.reduce((acc, cur) => {
          if (cur.Credit == "1") {
            acc = acc + 1;
          } else if (cur.Credit == "2") {
            acc = acc + 2;
          } else if (cur.Credit == "3") {
            acc = acc + 3;
          } else if (cur.Credit == "0") {
            acc = acc + 0;
          }
          return acc;
        }, 0);
        return countallCredit;
      }
    },
    countgrade(semester) {
      if (this.subjects.length != 0) {
        const SemesterID = semester;

        const filterSemester = this.subjects.filter((subject) => {
          return SemesterID == subject.SemesterID;
        });

        const calculategrade = filterSemester.reduce((acc, cur) => {
          const desiredsGrade = [
            { grade: "A", value: 4 },
            { grade: "B+", value: 3.5 },
            { grade: "B", value: 3 },
            { grade: "C+", value: 2.5 },
            { grade: "C", value: 2 },
            { grade: "D+", value: 1.5 },
            { grade: "D", value: 1 },
          ];
          const desiredGrade = desiredsGrade.find(
            (g) => g.grade == cur.Desired_grade
          ).value;

          if (cur.Credit == "1") {
            acc = acc + 1 * desiredGrade;
          } else if (cur.Credit == "2") {
            acc = acc + 2 * desiredGrade;
          } else if (cur.Credit == "3") {
            acc = acc + 3 * desiredGrade;
          } else if (cur.Credit == "0") {
            acc = acc + 0 * desiredGrade;
          }
          return acc;
        }, 0);
        return calculategrade;
      }
    },
    mydesiredGrade(SemesterID) {
      const grade = this.countgrade(SemesterID) / this.countCredit(SemesterID);
      if (Number.isNaN(grade) == true) {
        return this.grade0;
      } else {
        return grade.toFixed(2);
      }
    },

    getchart() {
      const semesterName = this.semesters.map((semester) => {
        const Name = semester.Semester_name;
        return Name;
      });

      const getgrade = this.semesters.map((semester) => {
        const grade = this.mydesiredGrade(semester.SemesterID);

        return grade;
      });

      var ctx = document.getElementById("graph").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: semesterName,
          datasets: [
            {
              label: "Study Result Simulation",
              data: getgrade,
              backgroundColor: [
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
                "rgba(255,197,66,1)",
              ],
              borderWidth: 1,
            },
            {
              label: "your grade",
              data: this.yourgradechart,
              backgroundColor: [
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
                "rgba(62, 213, 152, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>
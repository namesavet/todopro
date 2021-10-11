<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Index' })"
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
              2.8
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
                v-model="text"
                color="white"
                label-color="grey"
                placeholder="0.0"
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
      // grades: [],
      semesters: [],
      text: "",
      text1: "",
    };
  },
  components: {},
  mounted: function () {
    var ctx = document.getElementById("graph").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1/2019", "2/2019", "1/2020", "2/2020", "1/2021"],
        datasets: [
          {
            label: "Study Result Simulation",
            data: [2.8, 3, 3.5, 3.5, 2.85],
            backgroundColor: [
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
            data: [2.9, 3, 3, 4, 3.8],
            backgroundColor: [
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

    this.getSemesterData();
    // this.getGradeData();
  },
  methods: {
    async getSemesterData() {
      const { data } = await axios.get(
        "http://localhost:3000/semester/6130613034"
      );
      this.semesters = data.semester;
    },
    // async getGradeData() {
    //   const { data } = await axios.get(
    //     "http://localhost:3000/grade_summary/6130613034"
    //   );
    //   this.grades = data.grade;
    // },
  },
};
</script>
<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="
            $router.push({
              name: 'semester',
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

     
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-xs q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Semester</div>
      </div>
    </div>
    <div :key="index" v-for="(semester, index) in semesters">
      <div class="row justify-center text-right" style="margin-top: 15%">
        <div class="col-5 q-ml-md">
          <div class="semestertitle q-mt-sm">{{ semester.Semester_name }}</div>
        </div>
        <div class="col-4 q-ml-md">
          <q-btn
            flat
            round
            dense
            text-color="red"
            icon="delete_forever"
            @click="Deletesemester(index, semester.SemesterID)"
          />
        </div>
      </div>
      <div class="q-mx-lg q-mt-sm">
        <q-separator color="grey" inset />
      </div>
    </div>

    <div id="app" class="container">
      <form>
        <div class="form-row" v-for="(input, index) in semester" :key="index">
          <div class="row justify-center" style="margin-top: 11%">
            <div class="col-7 q-ml-md">
              <div class="semestertitle q-mt-sm">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="input.semester_name"
                  label-color="grey"
                  placeholder="X/YYYY"
                   mask="#/####"
                />
              </div>
            </div>
            <div class="q-ml-sm q-mt-sm">
              <q-btn
                @click="submitsemester(index)"
                round
                dense
                text-color="white"
                icon="done"
                class=""
                style="background-color: #40df9f"
              />
            </div>
        
          </div>
          <div class="q-mx-lg q-mt-sm">
            <q-separator color="grey" inset />
          </div>
        </div>
      </form>
    </div>


    <br />
    <br />
    <br />
  </q-page>
</template>
<script>
import axios from "axios";
export default {
  name: "app",

  data: () => ({
    semester: [
      {
        semester_name: "",
      },
    ],
    semesters: [],
    student: {},
    getchangSemester:"",
  }),
  mounted() {
    this.getSemester();
    this.getStudentData();
    this.getchang()
  },
  methods: {
    getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
      console.log( this.$route.query.SemesterID);
    },
    addSemester() {
      this.chapter.push({
        chapterName: "",
      });
    },


    submitsemester(index) {
      axios
        .post(`http://localhost:3000/semester/create/ `, {
          Semester_name: this.semester[index].semester_name,
          uid: this.$route.query.uid,
        })
        .then((response) => {
          this.semesters.push(response.data.data);
          this.semester[index].semester_name = "";
        });
    },
    Deletesemester(index, SemesterID) {
      axios
        .delete(`http://localhost:3000/semester/delete/${SemesterID}`)
        .then((response) => {
          console.log(response);
          this.semesters = this.semesters.filter((data, i) => i != index);
        });
    },

    async getSemester() {
      const { data } = await axios.get(
        `http://localhost:3000/semester/${this.$route.query.uid}`
      );
      this.semesters = data.semester;
    },
    async getStudentData() {
      const { data } = await axios.get(
        "http://localhost:3000/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },
  },
};
</script>


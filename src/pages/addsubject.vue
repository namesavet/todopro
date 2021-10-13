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

      <q-btn
        flat
        dense
        @click="onSubmit()"
        text-color="white"
        icon="done"
        class="q-mr-xs"
        style="background-color: #40df9f"
      />
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Subject</div>
      </div>
    </div>

    
      <div class="row justify-center">
        <div class="profile" style="overflow: hidden">
          <div class="iconteacher">
            <q-icon name="school" style="color: #ffffff; font-size: 35px">
            </q-icon>
          </div>
        </div>
      </div>

    <q-form class="q-gutter-md">
      <div class="row justify-center q-mt-lg">
        <div class="name q-mt-sm" style="overflow: hidden">
          <div class="col-2">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon
                name="chrome_reader_mode"
                size="30px"
                style="color: #ffc542"
              />
            </div>
          </div>
        </div>

        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            v-model="subject_name"
            label-color="grey"
            label="Subject name"
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="name q-mt-sm" style="overflow: hidden">
          <div class="col-2">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon
                name="chrome_reader_mode"
                size="30px"
                style="color: #ffc542"
              />
            </div>
          </div>
        </div>
        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            v-model="Abbreviation_name"
            label-color="grey"
            label="Initials name"
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="name q-mt-sm" style="overflow: hidden">
          <div class="col-2 item-center">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="perm_identity" size="30px" style="color: #ffc542" />
            </div>
          </div>
        </div>

        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            v-model="teacher_name"
            label-color="grey"
            label="Teacher name"
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="name q-mt-sm" style="overflow: hidden">
          <div class="col-2 item-center">
            <div class="row items-center justify-center q-mt-sm">
              <q-icon name="cloud" size="30px" style="color: #ffc542" />
            </div>
          </div>
        </div>

        <div class="col-8 q-ml-md q-gutter-xs">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            v-model="id_subject"
            label-color="grey"
            label="ID Subject"
          />
        </div>
      </div>

      <div class="row justify-center">
        <div class="gradewanttext">
          This ID can share the subject with oyher people.
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-md q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">Credit</div>
        </div>
      </div>
      <div class="">
        <div class="col-8 q-mx-md q-gutter-xs">
          <q-select
            label-color="grey"
            v-model="credit"
            :options="credits"
            label="Your credit"
            color="white"
          />
        </div>
      </div>

      <div class="row">
        <div
          class="text-white q-ml-md text-bold q-ml-md q-mt-sm q-gutter-xs"
          style="font-size: 30px"
        >
          Grade
        </div>

        <q-expansion-item
          dense-toggle
          switch-toggle-side
          expand-separator
          v-model="Grade_criterionID"
          style="font-size: 24px; color: white; margin-top: 1%"
        />
      </div>

      <div class="row">
        <div div class="col" v-if="Grade_criterionID">
          <strong>
            <div class="row text-red q-ml-lg">*Please enter a percentage</div>
            <div class="row q-mt-lg q-ml-lg">
              <div class="gradeA" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">A</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="a"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeB" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">B+</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="bplus"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeB" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">B</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="b"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeC" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">C+</div>
                  </div>
                </div>
              </div>

              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="cplus"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeC" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">C</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="c"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeD" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">D+</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="dplus"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>

            <div class="row q-mt-xs q-ml-lg">
              <div class="gradeD" style="overflow: hidden">
                <div class="col-2">
                  <div class="row items-center justify-center q-mt-sm">
                    <div class="textgrade">D</div>
                  </div>
                </div>
              </div>
              <div class="col-8 q-ml-xs q-gutter-xs">
                <q-input
                  :input-style="{ color: 'white' }"
                  color="white"
                  v-model="d"
                  label-color="grey"
                  label="Enter percent grade"
                />
              </div>
            </div>
          </strong>
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-md q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">Exam</div>
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-lg q-mt-sm q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 15px">
            Midterm exam
          </div>
        </div>
      </div>

      <div class="row justify-around">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-input
            :input-style="{ color: 'white' }"
            label-color="grey"
            filled
            color="white"
            v-model="Date_midterm_exam"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="Date_midterm_exam">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="col-5 q-mr-md q-mt-md">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            label-color="grey"
            v-model="score_midterm"
            label="Score%"
          />
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-lg q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 15px">
            Final exam
          </div>
        </div>
      </div>

      <div class="row justify-around">
        <div class="col-6 q-pa-md" style="max-width: 100%">
          <q-input
            filled
            v-model="Date_final_exam"
            mask="date"
            :rules="['date']"
            :input-style="{ color: 'white' }"
            label-color="grey"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="white">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="Date_final_exam">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="col-5 q-mr-md q-mt-md">
          <q-input
            :input-style="{ color: 'white' }"
            color="white"
            label-color="grey"
            v-model="score_final"
            label="Score%"
          />
        </div>
      </div>

      <div class="row">
        <div class="col q-ml-md q-gutter-xs">
          <div class="text-white text-bold" style="font-size: 30px">
            Desired grade
          </div>
        </div>
      </div>

      <div class="">
        <div class="col-8 q-mx-md q-gutter-xs">
          <q-select
            v-model="grade"
            :options="Desired_grades"
            label="Your grade"
            color="black"
            label-color="grey"
          />
        </div>
      </div>
    </q-form>

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
import axios from "axios";
export default {
  data() {
    return {
      subject_name: "",
      Abbreviation_name: "",
      teacher_name: "",
      id_subject: "",

      credit: "",
      credits: [
        "(3)-(0)-(21)",
        "(3)-(0)-(22)",
        "(3)-(0)-(23)",
        "(3)-(0)-(24)",
        "(3)-(0)-(25)",
      ],
      Grade_criterionID: false,
      a: "",
      bplus: "",
      b: "",
      cplus: "",
      c: "",
      dplus: "",
      d: "",
      selectday: "",
      score_midterm: "",
      score_final: "",
      grade: "",
      Desired_grades: ["A", "B+", "B", "C+", "C", "D+", "D", "E"],
      Date_midterm_exam: "",
      Date_final_exam: "",
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/subject/create ", {
          Subject_name: this.subject_name,
          Intal_name: this.Abbreviation_name,
          Teacher_name: this.teacher_name,
          IDsubject: this.id_subject,
          Credit: this.credit,
          GradeA: this.a,
          GradeBplus: this.bplus,
          GradeB: this.b,
          GradeCplus: this.cplus,
          GradeC: this.c,
          GradeDplus: this.dplus,
          GradeD: this.d,
          Date_midterm_exam: this.Date_midterm_exam,
          Date_final_exam: this.Date_final_exam,
          Score_midterm: this.score_midterm,
          Score_final: this.score_final,
          Desired_grade: this.grade,
          StudentID: "6130613034",
          SemesterID: "72100d56-21ae-42fd-8167-0b5c49c68b1d",
        })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({ path: "/Subject" });
    },
  },
};
</script>




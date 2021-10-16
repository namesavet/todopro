<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
          @click="$router.push({ name: 'subjectchapter', query: {
                id: subject.SubjectID,
              }, })"
          push
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>

      <q-btn
        flat
        dense
        @click="submitUpdateData()"
        push
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
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 35px"
              >
              </q-icon>
            </div>
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <div class="name" style="overflow: hidden">
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
        color="white"
        :input-style="{ color: 'white' }"
          v-model="subject.Subject_name"
          label-color="#96A7AF"
          label="Subject name"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div class="name" style="overflow: hidden">
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
        color="white"
        :input-style="{ color: 'white' }"
          v-model="subject.Intal_name"
          label-color="#96A7AF"
          label="Initials name"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div class="name" style="overflow: hidden">
        <div class="col-2 item-center">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon
              name="perm_identity"
              size="30px"
              style="color: #FFC542"
            />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
        color="white"
        :input-style="{ color: 'white' }"
          v-model="subject.Teacher_name"
          label-color="#96A7AF"
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
            v-model="subject.IDsubject"
            label-color="grey"
          />
        </div>
      </div>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Credit</div>
      </div>
    </div>
    <div class="row text-white">
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-select
        color="white"
          v-model="subject.Credit"
          :options="credits"
          label="Your credit"
          
        />
      </div>
    </div>


    <div class="row">
      <div
        class=" text-white q-ml-md  text-bold q-ml-md q-mt-sm q-gutter-xs"
        style="font-size: 30px"
      >
        Grade
      </div>
      
        <q-expansion-item
        
          dense-toggle
          switch-toggle-side
          expand-separator
          v-model="selectgrade"
          style="font-size: 24px; color: white; margin-top: 1% "
        />
      
    </div>

     <div class="row"  >
      <div div class="col" v-if="selectgrade">
        <strong>
          <div class="row text-red q-ml-lg" >*Please enter a percentage</div>
          <div class="row q-mt-lg q-ml-lg" >
            <div class="gradeA" style="overflow: hidden">
              <div class="col-2">
                <div class="row items-center justify-center q-mt-sm">
                  <div class="textgrade">A</div>
                </div>
              </div>
            </div>
            <div class="col-8 q-ml-xs q-gutter-xs">
              <q-input
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeA"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeBplus"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeB"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeCplus"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeC"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeDplus"
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
              color="white"
              :input-style="{ color: 'white' }"
                v-model="subject.GradeD"
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

    <div class="row q-gutter-xs">
      <div class="q-pa-md" style="max-width: 200px">
        <q-input 
        color="white"
        :input-style="{ color: 'white' }"
        filled v-model="subject.Date_midterm_exam" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="subject.Date_midterm_exam">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary"  flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-4 q-ml-lg q-gutter-xs">
        <q-input
        :input-style="{ color: 'white' }"
          color="white"
          label-color="#96A7AF"
          v-model="subject.Score_midterm"
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

    <div class="row q-gutter-xs">
      <div class="q-pa-md" style="max-width: 200px">
        <q-input 
        :input-style="{ color: 'white' }"
        color="white"
        filled v-model="subject.Date_final_exam" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="subject.Date_final_exam">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="col-4 q-ml-lg q-gutter-xs">
        <q-input
         :input-style="{ color: 'white' }"
          color="white"
          label-color="#96A7AF"
          v-model="subject.Score_final"
          label="Score%"
        />
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md  q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Desired grade
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-select
         :input-style="{ color: 'white' }"
          v-model="subject.Desired_grade"
          :options="desiredgrades"
          label="Your grade"
          color="white"
        />
      </div>
    </div>
<br>
<br>
<br>
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
import { date } from "quasar";
export default {
  name:"subject",
  data() {
    return {
      credits: [
        "(3)-(0)-(21)",
        "(3)-(0)-(22)",
        "(3)-(0)-(23)",
        "(3)-(0)-(24)",
        "(3)-(0)-(25)",
      ],
      selectgrade:false,
      desiredgrades: ["A", "B+", "B", "C+", "C", "D+", "D", "E"],
      subject:{},
    };
  },
   mounted() {
    this.getSubjectData();
  },

  methods: {
    formatDate(day) {
      return date.formatDate(day, "DD MMM YYYY");
    },
     async submitUpdateData() {
      const { data } = await axios.put("http://localhost:3000/subject/update/" + this.$route.query.id,
        {
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
        }
      );
      this.subject = data.subject;
      this.$router.push({
        path: "/SubjectChapter",
        query: {
          id: this.subject.SubjectID,
        },
      });
    },
    async getSubjectData() {
      const resp = await axios.get(
        "http://localhost:3000/subject/findsubject/" + this.$route.query.id
      );
      this.subject = resp.subject;
    },
  },
};
</script>




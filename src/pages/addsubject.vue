<template>
  <q-page class="addsub">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
          @click="$router.push({ name: 'subject' })"
          push
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>

      <q-btn
        flat
        dense
        @click="$router.push({ name: 'subject' })"
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
        <div class="row items-center justify-center q-mt-md">
          <q-img src="../image/women.png" style="height: 50%; max-width: 50%" />
        </div>
      </div>
    </div>

    <div class="row justify-center q-mt-lg">
      <div class="name" style="overflow: hidden">
        <div class="col-2">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/book.png"
              style="height: 70%; max-width: 70%"
            />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
          :input-style="{ color: 'white' }"
          color="white"
          v-model="subjectname"
          label-color="grey"
          label="Subject name"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div class="name" style="overflow: hidden">
        <div class="col-2">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/book.png"
              style="height: 70%; max-width: 70%"
            />
          </div>
        </div>
      </div>
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
          :input-style="{ color: 'white' }"
          color="white"
          v-model="initialsname"
          label-color="grey"
          label="Initials name"
        />
      </div>
    </div>

    <div class="row justify-center">
      <div class="name" style="overflow: hidden">
        <div class="col-2 item-center">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/people.png"
              style="height: 70%; max-width: 60%"
            />
          </div>
        </div>
      </div>

      <div class="col-8 q-ml-md q-gutter-xs">
        <q-input
          :input-style="{ color: 'white' }"
          color="white"
          v-model="teachername"
          label-color="grey"
          label="Teacher name"
        />
      </div>
    </div>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">Credit</div>
      </div>
    </div>
    <div class="row">
      <div class="col-8 q-ml-md q-gutter-xs">
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
        v-model="selectgrade"
        style="font-size: 24px; color: white; margin-top: 1%"
      />
    </div>

    <div class="row">
      <div div class="col" v-if="selectgrade">
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

    <div class="row q-gutter-xs">
      <div class="q-pa-md" style="max-width: 200px">
        <q-input
          :input-style="{ color: 'white' }"
          label-color="grey"
          filled
          color="white"
          v-model="date_midterm"
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
                <q-date v-model="date_midterm">
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
          label-color="grey"
          v-model="score"
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
          filled
          v-model="date_final"
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
                <q-date v-model="date_final">
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
          label-color="grey"
          v-model="score"
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

    <div class="row">
      <div class="col-8 q-ml-md q-gutter-xs">
        <q-select
          v-model="grade"
          :options="grades"
          label="Your grade"
          color="black"
          label-color="grey"
        />
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
export default {
  data() {
    return {
      subjectname: "",
      initialsname: "",
      teachername: "",

      credit: null,
      credits: [
        "(3)-(0)-(21)",
        "(3)-(0)-(22)",
        "(3)-(0)-(23)",
        "(3)-(0)-(24)",
        "(3)-(0)-(25)",
      ],
      selectgrade: false,
      a: "",
      bplus: "",
      b: "",
      cplus: "",
      c: "",
      dplus: "",
      d: "",
      selectday: "",
      score: "",
      grade: "",
      grades: ["A", "B+", "B", "C+", "C", "D+", "D", "E"],
      date_midterm: "2021/02/01",
      date_final: "2021/02/01",
    };
  },
};
</script>

<style scoped >
.addsub {
  background: #22343c;
}
.name {
  width: 38px;
  height: 48px;
  background: #625b39;
  border-radius: 15%;
}
.profile {
  width: 65px;
  height: 66px;
  background: #ff565e;
  border-radius: 50%;
}
.textgrade {
  font-size: 20px;
  color: white;
  font-weight: bold;
}
.gradeA {
  width: 38px;
  height: 42px;
  background: #3bc28d;
  border-radius: 10px;
}
.gradeB {
  width: 38px;
  height: 42px;
  background: #0f54b9;
  border-radius: 10px;
}
.gradeC {
  width: 38px;
  height: 42px;
  background: #ffc542;
  border-radius: 10px;
}
.gradeD {
  width: 38px;
  height: 42px;
  background: #ff974a;
  border-radius: 10px;
}
</style>



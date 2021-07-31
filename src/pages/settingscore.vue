<template>
  <q-page class="subject">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'subjectscore' })"
          push
          color=""
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>

      <div class="settingbtn">
        <q-btn
          flat
          round
          dense
          @click="$router.push({ name: 'subjectscore' })"
          push
          text-color="white"
          icon="done"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">SPI</div>
        </div>
        <div class="text-blue-grey-4">ดร.กุลศิริ</div>
      </div>
    </div>

  <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Midterm exam
          </div>
          <div
            class="col q-my-md q-mr-lg text-white text-bold text-right"
            style="font-size: 16px"
          >
            15/30
          </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress1"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>
   <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            test1
          </div>
          <div
            class="col q-my-md q-mr-lg text-white text-bold text-right"
            style="font-size: 16px"
          >
            10/15
          </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress2"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>


  <div class="row justify-center">
      <div class="score">
        <div class="row">
          <div
            class="col q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Homework1
          </div>
          <div
            class="col q-my-md q-mr-lg text-white text-bold text-right"
            style="font-size: 16px"
          >
            30/30
          </div>
        </div>
        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progress3"
            color="white"
            class=""
            style="width: 90%"
          />
        </div>
      </div>
    </div>


    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <q-btn
            size="20px"
            round
            color=""
            icon="add"
            style="
              background-color: #40df9f;

              border-radius: 50%;
              border: 10px solid #286053;
            "
          />
        </div>
      </div>

      <div class="row items-center justify-center">
        <div class="fontaddsubject" style="color: #40df9f">Add Score</div>
      </div>
    </div>

    <br />
    <br />
    <br />
    <br />

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
  </q-page>
</template>

<script>
export default {
  data() {
    return {
     progressall: 0.28,
      progress1: 0.50,
      progress2: 0.66,
      progress3: 1,
    };
  },
};
</script>
<style scoped>
.subject {
  background: #22343c;
}
.score {
  width: 100%;
  height: 100px;
  background: #2a3c44;
  border-radius: 25px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
.warringscore {
  width: 317px;
  height: 55px;
  background: #ff5656;
  border-radius: 25px;
  margin-top: 10px;
}
.scoregrade {
  width: 271px;
  height: 268px;
  background: #2a3c44;
  border-radius: 25px;
}
</style >

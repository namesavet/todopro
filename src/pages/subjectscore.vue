<template>
  <q-page class="subject">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtotestandscore">
          <q-btn
            flat
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
        </router-link>
      </q-toolbar-title>
      <router-link to="gotosettingscore">
        <div class="settingbtn">
          <q-btn flat round dense text-color="white" icon="settings" class="" />
        </div>
      </router-link>
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
            style="font-size: 20px"
          >
            Score
          </div>
          <div
            class="col q-my-md q-mr-lg text-bold text-right"
            style="font-size: 20px; color: #ff565e"
          >
            28%
          </div>
        </div>

        <div class="row justify-center">
          <q-linear-progress
            dark
            rounded
            size="16px"
            :value="progressall"
            class=""
            style="width: 90%; color: #ff565e"
          />
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="warringscore q-my-md text-white">
        <div class="q-my-sm">
          <div class="row justify-center">
            You must score 22 points to pass a E
          </div>
          <div class="row justify-center">grade and 62 points to A grade</div>
        </div>
      </div>
    </div>

    <div class="row justify-center">
      <div class="scoregrade">
        <div
          class="q-mt-md q-ml-lg text-white text-bold"
          style="font-size: 20px"
        >
          Grade
        </div>
        <div class="gradechart">
          
          <!-- <q-img src="../image/gradechart.png" style="width: 90%" /> -->
        </div>
        <!-- <div id="trapezoid" class="row justify-center text-center">
          <div id="trapezoid2" class="row justify-center text-center">
            <div id="trapezoid3" class="row justify-center text-center">
              <div id="trapezoid4" class="row justify-center text-center">
                <div
                  id="trapezoid5"
                  class="row justify-center text-center"
                ></div>
              </div>
            </div>
          </div>
        </div> -->
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
      progress1: 0.5,
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
  background: #30444e;
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
  background: #30444e;
  border-radius: 25px;
}
.gradechart {
  background-image: url("../image/gradechart.png");
  width: 100%;
  height: 75%;
  background-size: 100%;
   border-radius: 25px;
}
/* #trapezoid {
  border-bottom: 200px solid;
  border-color: #ff565e;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  height: 0;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  border-radius: 40%;
}
#trapezoid2 {
  border-bottom: 160px solid;
  border-color: #ff974a;
  border-left: 80px solid transparent;
  border-right: 80px solid transparent;
  height: 0;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 40px;
}
#trapezoid3 {
  border-bottom: 120px solid;
  border-color: #ffc542;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  height: 0;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 40px;
}
#trapezoid4 {
  border-bottom: 80px solid;
  border-color: #3bc28d;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  height: 0;
  width: 80px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 40px;
}
#trapezoid5 {
  border-bottom: 40px solid;
  border-color: #0f54b9;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  height: 0;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 40px;
} */
</style >


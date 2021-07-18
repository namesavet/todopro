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
      <div class="settingbtn">
        <q-btn flat round dense text-color="white" icon="settings" class="" />
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
        <div
          class="q-my-md q-ml-lg text-white text-bold"
          style="font-size: 20px"
        >
          Score
        </div>

        <div class="row justify-center">
          <q-linear-progress
            dark
            stripe
            rounded
            size="16px"
            :value="progress2"
            color="red"
            class=""
            style="width: 280px"
          />
        </div>
      </div>
    </div>


   <div class="row justify-center">
   
      <div class="warringscore q-my-md text-white ">
          <div class="q-my-sm">

              <div class="row justify-center">
            You must score 22 points to pass a E
              </div>
             <div class="row justify-center">
            grade and 62 points to A grade
              </div>

         </div>
       
       </div>

        
   </div>
    
     <div class="row justify-center">
      <div class="scoregrade"></div>
    </div>






      <div class="row justify-center">
        <div class="score">
          <div
            class="q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Midterm exam
          </div>

          <div class="row justify-center">
            <q-linear-progress
              dark
              stripe
              rounded
              size="16px"
              :value="progress2"
              color="red"
              class=""
              style="width: 280px"
            />
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="score">
          <div
            class="q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            test1
          </div>

          <div class="row justify-center">
            <q-linear-progress
              dark
              stripe
              rounded
              size="16px"
              :value="progress2"
              color="red"
              class=""
              style="width: 280px"
            />
          </div>
        </div>
      </div>
      <div class="row justify-center">
        <div class="score">
          <div
            class="q-my-md q-ml-lg text-white text-bold"
            style="font-size: 16px"
          >
            Homework1
          </div>

          <div class="row justify-center">
            <q-linear-progress
              dark
              stripe
              rounded
              size="16px"
              :value="progress2"
              color="red"
              class=""
              style="width: 280px"
            />
          </div>
        </div>
      </div>
   <br>
<br>
<br>
<br>

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
  setup() {
    return {
      progress1: 0.4,
      progress2: 0.62,
    };
  },
};
</script>

<style scoped>
.subject {
  background: #22343c;
}
.score {
  width: 317px;
  height: 100px;
  background: #2a3c44;
  border-radius: 25px;
  margin-top: 10px;
}
.settingbtn {
  width: 35px;
  height: 34px;
  background: #40df9f;
  border-radius: 15%;
}
.warringscore{
    width: 317px;
  height: 55px;
  background: #FF5656;
  border-radius: 25px;
  margin-top: 10px;
}
.scoregrade{
  width: 271px;
  height: 268px;
  background: #2a3c44;
  border-radius: 25px;
}
</style >

<script>
</script>
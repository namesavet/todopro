<template>
  <q-page class="subject">
    <q-toolbar>
      <q-toolbar-title>
          <q-btn
            flat
            @click="$router.push({ name: 'subject' })"
            push
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
      </q-toolbar-title>

        <div class="settingbtn">
          <q-btn flat @click="$router.push({ name: 'settingscore' })"
            push round dense text-color="white" icon="settings" class="" />
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
      <div class="scoregrade">
        <div
          class="q-mt-md q-ml-lg text-white text-bold"
          style="font-size: 20px"
        >
          Grade
        </div>
        <div class="row gradechart">
          <div class="col-2"></div>
          <div class="col-6 text-center text-white text-bold">
            <div class="row justify-center q-mt-xl q-mr-sm">90%</div>
            <div class="row justify-center q-mt-sm q-mr-sm">80%</div>
            <div class="row justify-center q-mt-md q-mr-sm">70%</div>
            <div class="row justify-center q-mt-md q-mr-sm">60%</div>
            <div class="row justify-center q-mt-sm q-mr-sm">50%</div>
          </div>
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

    <div class="row justify-center items-center text-bold q-mt-sm">
      <div class="testtext row justify-center items-center">
        <div class="col-1 mark"></div>
        <div class="col-4 q-ml-sm">Midterm exam</div>
        <div class="col-4">08 Mar 2020</div>
        <div class="col-1">30%</div>
      </div>
    </div>

    <div class="row justify-center items-center text-bold">
      <div class="testtext row justify-center items-center">
        <div class="col-1 mark"></div>
        <div class="col-4 q-ml-sm">Final exam</div>
        <div class="col-4">18 Mar 2020</div>
        <div class="col-1">30%</div>
      </div>
    </div>
    <div class="row justify-center text-bold">
      <div class="gradewanttext q-gutter-x-md">The grade you want is A</div>
    </div>

    <div class="q-my-md q-ml-md text-white text-bold" style="font-size: 25px">
      Chapter
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">

      <div>
          <div class="row justify-center">
            <div class="profilesubject1 text-bold" style="overflow: hidden">
              <div class="chapter row items-center justify-center q-mt-sm">
                1
              </div>
            </div>

            <div class="col self-center text-bold q-ml-lg">
              <div class="text-white text-bold" style="font-size: 16px">
                Software Quality
              </div>
            </div>
          </div>

          <div class="q-mr-lg q-my-lg">
            <q-separator color="grey" inset="item" />
          </div>


        <div class="row justify-center">
          <div class="profilesubject2 text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">2</div>
          </div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Software Quality Factor
            </div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center">
          <div class="profilesubject3 text-bold" style="overflow: hidden">
            <div class="chapter row items-center justify-center q-mt-sm">3</div>
          </div>
          <div class="col self-center text-bold q-ml-lg">
            <div class="text-white text-bold" style="font-size: 16px">
              Software Process Improvment
            </div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
      </div>
    </div>


    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
            <q-btn
              @click="$router.push({ name: 'addsubject' })"
              push
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
        <div class="fontaddsubject">Add Chapter</div>
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

.fontaddsubject {
  color: #3ed598;
}
.subject {
  background: #22343c;
}
.gradewanttext {
  font-size: 15px;
  color: #96a7af;
}
.testtext {
  font-size: 15px;
  color: #96a7af;
  width: 400px;
}
.mark {
  background: #ff565e;
  border-radius: 50%;
  width: 10px;
  height: 10px;
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
  background: #30444e ;
  border-radius: 25px;
  box-shadow: 2px 2px 4px #19282F;
}

.profilesubject1 {
  width: 50px;
  height: 50px;
  background: #ffc542;
  border-radius: 100%;
}

.profilesubject2 {
  width: 50px;
  height: 50px;
  background: #3ed598;
  border-radius: 100%;
}

.profilesubject3 {
  width: 50px;
  height: 50px;
  background: #ff565e;
  border-radius: 100%;
}
.chapter {
  font-size: 22px;
  color: white;
}
.gradechart {
  background-image: url("../image/gradechart.png");
  width: 100%;
  height: 75%;
  background-size: 100%;
  border-radius: 25px;
}
</style >


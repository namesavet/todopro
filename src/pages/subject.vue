<template>
  <q-page class="subject">
    <q-toolbar>
      <q-toolbar-title>
        <router-link to="backtohome">
          <q-btn
            flat
            color=""
            icon="keyboard_arrow_left"
            label="Back"
            style="font-size: 16px; color: #96a7af"
          />
        </router-link>
      </q-toolbar-title>
      <q-btn
        flat
        round
        dense
        text-color="white"
        icon="search"
        class="q-mr-xs"
      />
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">
            Subject
          </div>
        </div>
      </div>

      <div>
        <div class="row justify-center">
          <div class="profilesubject1" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>

          <div class="col self-center q-ml-md">
            <div class="text-white">OOP 63</div>
            <div class="text-blue-grey-4">ดร.ขวัญ</div>
          </div>

          <div
            class="q-mr-lg numberchapter text-white self-center"
            style="overflow: hidden"
          >
            <div class="row items-center justify-center">9</div>
          </div>
        </div>

        <div class="q-mr-lg q-mt-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center q-mt-lg">
          <div class="profilesubject2" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>
          <div class="col self-center q-ml-md">
            <div class="text-white">Data Sci 63</div>
            <div class="text-blue-grey-4">ดร.ขวัญ</div>
          </div>
          <div
            class="q-mr-lg numberchapter text-white self-center"
            style="overflow: hidden"
          >
            <div class="row items-center justify-center">8</div>
          </div>
        </div>

        <div class="q-mr-lg q-mt-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center q-mt-lg">
          <div class="profilesubject3" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>
          <div class="col self-center q-ml-md">
            <div class="text-white">UX/UI 63</div>
            <div class="text-blue-grey-4">ดร.ขวัญ</div>
          </div>
          <div
            class="q-mr-lg numberchapter text-white self-center"
            style="overflow: hidden"
          >
            <div class="row items-center justify-center">4</div>
          </div>
        </div>

        <div class="q-mr-lg q-mt-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center q-mt-lg">
          <div class="profilesubject4" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>
          <div class="col self-center q-ml-md">
            <div class="text-white">SPI</div>
            <div class="text-blue-grey-4">ดร.ขวัญ</div>
          </div>
          <div
            class="q-mr-lg numberchapter text-white self-center"
            style="overflow: hidden"
          >
            <div class="row items-center justify-center">7</div>
          </div>
        </div>

        <div class="q-mr-lg q-mt-lg">
          <q-separator color="grey" inset="item" />
        </div>

        <div class="row justify-center q-mt-lg">
          <div class="profilesubject5" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>

          <div class="col self-center q-ml-md">
            <div class="text-white">SW Constructure</div>
            <div class="text-blue-grey-4">ดร.ขวัญ</div>
          </div>
          <div
            class="q-mr-lg numberchapter text-white self-center"
            style="overflow: hidden"
          >
            <div class="row items-center justify-center">10</div>
          </div>
        </div>
        
        <div class="q-mr-lg q-mt-lg"><q-separator color="grey" inset="item" /></div>
        
      </div>
    </div>

    <div class="q-px-sm q-py-lg">
      <div class="column items-center" style="margin-top: 20px">
        <div class="row items-center justify-center">
          <router-link to="gotoaddsubject">
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
          </router-link>
        </div>
      </div>


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
export default {};
</script>

<style scoped>
.subject {
  background: #22343c;
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

.profilesubject4 {
  width: 50px;
  height: 50px;
  background: #ffc542;
  border-radius: 100%;
}

.profilesubject5 {
  width: 50px;
  height: 50px;
  background: #3ed598;
  border-radius: 100%;
}

.numberchapter {
  width: 25px;
  height: 25px;
  background: #3ed598;
  border-radius: 100%;
}

.background-icon {
  width: 75px;
  height: 75px;
  background: #286053;
  border-radius: 100%;
}

.buttom {
  background: #3ed598;
  position: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
}

.fontaddsubject {
  color: #3ed598;
}
</style >
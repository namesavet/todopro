<template>
  <q-page class="subject">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'Index' })"
          push
          color=""
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="q-pa-md">
        <div class="row">
          <div class="text-white text-bold" style="font-size: 30px">Score</div>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="allscore"></div>
    </div>

    <div class="q-ml-lg q-mt-lg">
        <div class="row justify-center" 
            @click="$router.push({ name: 'subjectscore' })" push
        >
          <div
            class="profilesubject1"
           
            style="overflow: hidden"
          >
            <div class="row items-center justify-center q-mt-sm">
              <q-img
                src="../image/profilesubject.png"
                style="height: 50%; width: 50%"
              />
            </div>
          </div>

          <div class="col self-center q-ml-md">
            <div class="text-white">SPI</div>
            <div class="text-blue-grey-4">ดร.กุลศิริ</div>
          </div>

          <div class="q-mr-lg text-white self-center" style="overflow: hidden">
            <div class="row items-center justify-center">1</div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>

      <div class="row justify-center">
        <div class="profilesubject2" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
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
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">2</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>

      <div class="row justify-center">
        <div class="profilesubject3" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>
        <div class="col self-center q-ml-md">
          <div class="text-white">UX/UI 63</div>
          <div class="text-blue-grey-4">ดร.จาม</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">3</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>

      <div class="row justify-center">
        <div class="profilesubject4" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>
        <div class="col self-center q-ml-md">
          <div class="text-white">OOP 63</div>
          <div class="text-blue-grey-4">ดร.กริต</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">4</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>

      <div class="row justify-center">
        <div class="profilesubject5" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>

        <div class="col self-center q-ml-md">
          <div class="text-white">SW Constructure</div>
          <div class="text-blue-grey-4">ดร.อซิส</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">5</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>
      <div class="row justify-center">
        <div class="profilesubject5" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>

        <div class="col self-center q-ml-md">
          <div class="text-white">SW Constructure</div>
          <div class="text-blue-grey-4">ดร.อซิส</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">5</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>
      <div class="row justify-center">
        <div class="profilesubject5" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>

        <div class="col self-center q-ml-md">
          <div class="text-white">SW Constructure</div>
          <div class="text-blue-grey-4">ดร.อซิส</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">5</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>
      <div class="row justify-center">
        <div class="profilesubject5" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>

        <div class="col self-center q-ml-md">
          <div class="text-white">SW Constructure</div>
          <div class="text-blue-grey-4">ดร.อซิส</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">5</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
      </div>
      <div class="row justify-center">
        <div class="profilesubject5" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-img
              src="../image/profilesubject.png"
              style="height: 50%; width: 50%"
            />
          </div>
        </div>

        <div class="col self-center q-ml-md">
          <div class="text-white">SW Constructure</div>
          <div class="text-blue-grey-4">ดร.อซิส</div>
        </div>
        <div class="q-mr-lg text-white self-center" style="overflow: hidden">
          <div class="row items-center justify-center">5</div>
        </div>
      </div>

      <div class="q-mr-lg q-my-lg">
        <q-separator color="grey" inset="item" />
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
export default {};
</script>

<style scoped>
.subject {
  background: #22343c;
}

.allscore {
  width: 317px;
  height: 241px;
  background: #30444e;
  border-radius: 25px;
  box-shadow: 2px 2px 4px #19282f;
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
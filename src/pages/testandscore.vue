<template>
  <q-page class="addbackground">
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
           <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 25px"
              >
              </q-icon>
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
         <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 25px"
              >
              </q-icon>
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
         <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 25px"
              >
              </q-icon>
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
        <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 25px"
              >
              </q-icon>
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
        <div class="profilesubject" style="overflow: hidden">
            <div class="profileicon">
              <q-icon
                name="school"
                style="color: #ffffff; font-size: 25px"
              >
              </q-icon>
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

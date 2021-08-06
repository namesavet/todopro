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
        <div
          class="row justify-center"
          @click="$router.push({ name: 'subjectchapter' })"
          push
        >
          <div class="profilesubject1" style="overflow: hidden">
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
            class="q-mr-lg text-center numberchapter text-white self-center"
            style="overflow: hidden ; font-size:14px;"
          >
            <div class="q-mt-xs">3</div>
          </div>
        </div>

        <div class="q-mr-lg q-my-lg">
          <q-separator color="grey" inset="item" />
        </div>
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
          class="q-mr-lg text-center numberchapter text-white self-center"
          style="overflow: hidden ; font-size:14px;"
        >
          <div class="q-mt-xs">4</div>
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
          class="
            q-mr-lg
            text-center
            tex-center
            numberchapter
            text-white
            self-center
          "
          style="overflow: hidden; font-size:14px;"
         
        >
          <div class="q-mt-xs">7</div>
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
          <div class="text-white">OOP 63</div>
          <div class="text-blue-grey-4">ดร.ขวัญ</div>
        </div>
        <div
          class="
            q-mr-lg
            text-center
            numberchapter
            text-white
            self-center
            items-center
          "
          style="overflow: hidden ; font-size:14px;"
        >
          <div class="q-mt-xs">7</div>
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
          class="q-mr-lg text-center numberchapter text-white self-center"
          style="overflow: hidden; font-size:14px;"
        >
          <div class="q-mt-xs">10</div>
        </div>
      </div>

      <div class="q-mr-lg q-mt-lg">
        <q-separator color="grey" inset="item" />
      </div>
    </div>

    <div class="q-px-sm">
      <div class="col items-center" style="margin-top: 20px">
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
    </div>

    <div class="row items-center justify-center">
      <div class="fontaddsubject">Add Subject</div>
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
</style >
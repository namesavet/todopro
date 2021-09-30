<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          @click="$router.push({ name: 'calendar' })"
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
          @click="$router.push({ name: 'editevent' })"
          push
          round
          dense
          text-color="white"
          icon="settings"
          class=""
        />
      </div>
    </q-toolbar>

    <div class="row justify-center">
      <div class="text-white text-bold" style="font-size: 30px">Test1</div>
    </div>


    <div class=" item-center q-ml-lg q-mr-lg q-mt-lg" style="overflow: hidden">

      <div class="row">
      <div class="text-white text-bold" style="font-size: 20px">Type : </div>

      <div class="row justify-center">
        <div class="typetest q-ml-md"></div>
        <div class="self-center text-bold q-ml-md">
          <div class="text-white text-bold q-mt-xs" style="font-size: 16px">Test</div>
        </div>
      </div>

      </div>
     
      <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>
  

    <div class=" item-center q-ml-lg q-mr-lg" style="overflow: hidden">

      <div class="row">
      <div class="text-white text-bold" style="font-size: 20px">Location : </div>

      <div class="row justify-center">
        <div class="self-center text-bold q-ml-sm">
          <div class="text-white text-bold q-mt-xs" style="font-size: 16px">6102</div>
        </div>
      </div>

      </div>
     
       <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>



     <div class=" item-center q-ml-lg q-mr-lg" style="overflow: hidden">

      <div class="row">
      <div class="text-white text-bold" style="font-size: 20px">Date : </div>

      <div class="row justify-center">
        <div class="self-center text-bold q-ml-sm">
          <div class="text-white text-bold q-mt-xs" style="font-size: 16px">26/05/2021</div>
        </div>
      </div>

      </div>
     
       <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>


 <div class=" item-center q-ml-lg q-mr-lg" style="overflow: hidden">

      <div class="row">
      <div class="text-white text-bold" style="font-size: 20px">Time : </div>

      <div class="row justify-center">
        <div class="self-center text-bold q-ml-sm">
          <div class="text-white text-bold q-mt-xs" style="font-size: 16px">16.30 น.</div>
        </div>
      </div>

      </div>
     
       <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>
    
    
     <div class=" item-center q-ml-lg q-mr-lg" style="overflow: hidden">

      <div class="row">
      <div class="text-white text-bold" style="font-size: 20px">Note : </div>

      <div class="row justify-center">
        <div class="self-center text-bold q-ml-sm">
          <div class="text-white text-bold q-mt-xs" style="font-size: 16px">
            Microsoft Outlook สนับสนุนการกำหนดค่าและปลั๊กอินภายในเครื่องที่อาจส่งผลกระทบต่อวิธีการแสดงข้อความ ในบางกรณี ผู้รับที่ใช้การติดตั้ง Outlook แบบกำหนดเอง อาจเห็นเค้าโครงที่แปลก หรือองค์ประกอบของหน้าซ้ำเมื่อดูเพจที่ออกแบบจาก Dynamics 365 Marketing ซึ่งการแสดงตัวอย่างมาตรฐานหรือกล่องขาเข้าไม่สามารถจำลองผลกระทบเหล่านี้ได้ หากจำเป็น คุณสามารถใช้ การส่งการทดสอบ เพื่อดูว่าการออกแบบของคุณมีลักษณะอย่างไรในการกำหนดค่า Outlook เฉพาะ
          </div>
        </div>
      </div>

      </div>
     
       <div class="q-my-sm q-mb-lg">
        <q-separator color="grey" inset="" />
      </div>
    </div>

   

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
      Title: "test1",
      Location: "6302",
      text: "",
      date: "",
      time: "",

      type: "Test",
      types: ["Homework", "Test", "Other"],
    };
  },
};
</script>





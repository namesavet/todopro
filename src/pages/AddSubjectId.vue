<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          icon="keyboard_arrow_left"
          @click="$router.push({ name: 'selectaddsubject' })"
          push
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Add subject from ID
        </div>
      </div>
    </div>

    <div class="q-mt-lg">
      <div class="row justify-center q-ml-md q-gutter-xs">
        <q-input
          rounded
          outlined
          :input-style="{ color: 'black' }"
          color="white"
          v-model="searchid"
          bg-color="white"
          style="width:70vw"
        />
        <q-btn
          rounded
          flat
          class="q-mt-sm"
          @click="$router.push({name:'addsubjectid',query:{searchText:searchid}})"
          color="white"
          icon="search"
          style="font-size: 16px; color: #96a7af"
        />
      </div>
      
       <div class="row" style="margin-left:15vw;margin-top:20px">
          <SubjectList :item="$route.query.searchText"/>
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
import SubjectList from 'src/pages/SubjectList.vue';

export default {
  components:{
    SubjectList
  },
  data() {
    return {
      searchid: "",
    };
  },
};
</script>


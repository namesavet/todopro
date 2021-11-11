<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Semester</div>
      <div class="row justify-center items-center">
        <div class="icon_Profile" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon
              name="cast_for_education"
              size="30px"
              style="color: #ffc542"
            />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Semester_name"
            label-color="grey"
            label="1/2020"
            mask="#/####"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter Semester ',
            ]"
          />
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Createaccount2' })"
            push
            align="center"
            no-caps
            icon-right="arrow_back"
            size="20px"
            style="width: 50px; background: #286053; color: #3dd598"
          />
        </div>
        <div class="button-next q-mt-lg q-ml-md">
          <q-btn
            @click="onSubmit()"
            push
            align="center"
            no-caps
            label="Next "
            icon-right="arrow_forward"
            size="20px"
            style="width: 250px; background: #40df9f; color: white"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Semester_name: "",
      uid: this.$route.query.uid,
    };
  },
  methods: {
    onSubmit() {
      
      axios
        .post("http://localhost:3000/semester/create", {
          uid: this.$route.query.uid,
          Semester_name: this.Semester_name,
        })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/Index",
        query: {
          uid: this.uid,
        },
      });
    },
  },
};
</script>


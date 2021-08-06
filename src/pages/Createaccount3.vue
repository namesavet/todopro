<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Sign up</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">to start working</div>

      <div class="row justify-center items-center q-mt-md">
        <div class="col-10 ">
          <q-input
          
            square
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="Telephone number"
            color="white"
            v-model="Phone"
            mask="### - ### - ####"
            style="font-size: 15px"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please enter telephone number',
            ]"
          >
            <template v-slot:before>
              <q-icon name="call" color="white" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center ">
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
            @click="gotocreateaccount4()"
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
export default {
  data() {
    return {
      Phone: "",
    };
  },

  methods: {
    gotocreateaccount4() {
      console.log(this.Phone);

      this.$router.push({
        path: "/Createaccount4",
      });
    },
  },
};
</script>

<style scoped>

</style>
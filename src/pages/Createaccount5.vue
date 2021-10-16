<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">OTP</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">to start working</div>

      <div class="row justify-center items-center q-mt-md">
        <div class="col-10">
          <q-input
            square
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="OTP"
            color="white"
            style="font-size: 30px"
            v-model="OTP"
            input-class="text-center"
            mask="#    #    #    #    #    #"
          >
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="text_OTP q-mt-lg q-ml-lg q-mr-lg">
          Please, enter 6-digit code We send on your number as SMS
        </div>
      </div>

   <div class="row justify-center items-center ">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Createaccount4' })"
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
            @click="$router.push({ name: 'Welcome' })"
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
      OTP: "",
    };
  },
};
</script>

<style scoped>
</style>
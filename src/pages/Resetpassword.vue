<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Reset Password</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">enter security code</div>

      <div class="row justify-center items-center">
        <div class="col-10 q-mt-lg">
          <q-input
            square
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="enter code"
            color="white"
            style="font-size: 28px"
            v-model="Security_code"
            input-class="text-center"
            mask="#  #  #  #  #  #"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please enter telephone number ',
            ]"
          >
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="text_OTP q-mt-lg q-ml-lg q-mr-lg">
          Please check your phone for SMS messages with your code. Your code is
          6 characters long.
        </div>
      </div>

      <div class="row justify-center items-center q-mt-md">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Forgotpassword' })"
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
            @click="gotonewpassword()"
            push
            align="center"
            no-caps
            label="Next "
            icon-right="arrow_forward"
            size="20px"
            style="width: 250px; background: #40df9f; color: white"
            type="submit"
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
      Security_code: "",
    };
  },

  methods: {
    gotonewpassword() {
      console.log(this.Security_code);

      this.$router.push({
        path: "/Newpassword",
      });
    },
  },
};
</script>

<style scoped>
</style>
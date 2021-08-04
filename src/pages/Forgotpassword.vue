<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Forgot Password</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Find your account</div>

      <div class="row justify-center items-center">
        <div class="col-10 q-mt-lg">
          <q-input
            square
            :input-style="{ color: 'white' }"
            label-color="grey"
            label="telephone number"
            color="white"
            v-model="Phone"
            mask="### - ### - ####"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Please enter telephone number ',
            ]"
          >
           <template v-slot:before>
              <q-icon name="call" color="white" />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class=" text_OTP q-mt-lg q-ml-lg q-mr-lg">
          Please enter your telephone number to find your account.
        </div>
      </div>

      <div class="row justify-center items-center q-mt-md">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Welcome' })"
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
            @click="gotoresetpassword()"
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
    gotoresetpassword() {
      console.log(this.Phone);

      this.$router.push({
        path: "/Resetpassword",
      });
    },
  },
};
</script>

<style scoped>
.Welcome {
  background: #22343c;
}
.Logo {
  width: 50px;
  height: 50px;
  background: #40df9f;
  border-radius: 15px;
  margin-top: 100px;
}
.texttitle1 {
  font-size: 40px;
  font-weight: bold;
  color: white;
}
.texttitle2 {
  font-size: 25px;
  font-weight: bold;
  color: #96a7af;
}
.text_OTP {
  color: #96a7af;
}
</style>
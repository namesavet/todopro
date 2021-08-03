<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">New Password</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">create new password</div>

     <div class="row justify-center items-center q-mt-lg ">
        <div class="icon_Key" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-md">
            <q-img src="../image/key.png" style="max-width: 45%" />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
            class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Password"
            label-color="grey"
            label="Create new password"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter password ',
            ]"
            :type="isPwd ? 'Password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div class="row justify-center items-center">
        <div class="text_OTP q-mt-lg q-ml-lg q-mr-lg">
          Create a new password of at least 8 characters.
        </div>
      </div>

      <div class="row justify-center items-center q-mt-md">
        <div class="button_back q-mt-lg">
          <q-btn
            @click="$router.push({ name: 'Resetpassword' })"
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
          @click="gotowelcome()"
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
      Password: "",

      isPwd: true,
    };
  },
  methods: {
    gotowelcome() {
      console.log(this.Password);

      this.$router.push({
        path: "/Welcome",
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
.icon_Key {
  width: 38px;
  height: 48px;
  background: #623a42;
  border-radius: 10px;
}
</style>
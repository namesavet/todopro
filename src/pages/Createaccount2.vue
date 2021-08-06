<template>
  <q-page class="addbackground q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Hello !</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">Ratchaya Narueradanan</div>

      <div class="row justify-center items-center q-mt-md">
        <div class="icon_Key" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
             <q-icon
              name="lock"
              size="30px"
              style="color: #FF575F"
            />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
           class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Password"
            label-color="grey"
            label="Create password"
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

      <div class="row justify-center items-center ">
        <div class="icon_Key" style="overflow: hidden">
          <div class="row items-center justify-center q-mt-sm">
            <q-icon
              name="lock"
              size="30px"
              style="color: #FF575F"
            />
          </div>
        </div>
        <div class="col-9 q-ml-md q-gutter-xs">
          <q-input
          class="q-mt-md"
            :input-style="{ color: 'white' }"
            v-model="Check_password"
            label-color="grey"
            label="Confirm your password"
            color="white"
            :rules="[
              (val) => (val && val.length > 0) || 'Please enter password ',
            ]"
            :type="isPwd1 ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd1 ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd1 = !isPwd1"
              />
            </template>
          </q-input>
        </div>
      </div>

      <div>
        <div class="row justify-center items-center">
          <div class="button_back q-mt-lg">
            <q-btn
              @click="$router.push({ name: 'Createaccount1' })"
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
              @click="gotocreateaccount3()"
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
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Password: "",
      Check_password: "",
      isPwd: true,
      isPwd1: true,
    };
  },
  methods: {
    gotocreateaccount3() {
      console.log(this.Password);
      console.log(this.Check_password);
      this.$router.push({
        path: "/Createaccount3",
      });
    },
  },
};
</script>

<style scoped>

</style>
<template>
  <div class="row q-pa-md row justify-center">
    <div class="text-center">
      <div
        class="borderdash row justify-center items-center"
        @click="
          $router.push({
            name: 'profile',
            query: {
              uid: student.uid,
            },
          })
        "
        push
      >
        <div class="profileImg">
          <q-img
            src="../image/profile.png"
            style="height: 100%; max-width: 100%; border-radius: 20%"
          />
        </div>
      </div>
    </div>

    <div class="col q-ml-md q-mt-sm q-gutter-xs">
      <div class="row justify-between">
        <div class="text-white text-bold" style="font-size: 24px">Hello!</div>
        <q-btn
          rounded
          color="green"
          @click="$router.push({ name: 'semester' })"
          push
          label="1/2021"
          style="height: 33px"
        />
      </div>

      <div class="row">
        <div class="text-white text-bold" style="font-size: 20px">
          {{ student.Fullname }}
        </div>
      </div>

      <div class="row justify-end">
        <q-btn
          @click="$router.push({ name: 'grade summary' })"
          push
          style="font-size: 12px; height: 28px"
          rounded
          color="red"
          label="Grade summary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      student: {},
    };
  },
  mounted() {
    this.getStudentData();
  },
  methods: {
    async getStudentData() {
      console.log(this.$route.query.uid);
      const { data } = await axios.get(
        "http://localhost:3000/student/findStudentID/" + this.$route.query.uid
      );
      console.log(data.student);
      this.student = data.student;
    },
  },
};
</script>

<style scoped>
.profileImg {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 20px;
}
.borderdash {
  width: 110px;
  height: 110px;
  border: dashed gray 2px;
  border-radius: 20px;
}
</style>

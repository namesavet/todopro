<template>
  <q-page class="addbackground">
    <div class="row">
      <div class="col">
        <div class="row q-pa-lg q-mt-xl">
          <div class="text-center">
            <div class="borderdash row justify-center items-center">
              <div class="profileImg">
                <q-img
                  src="../image/profile.png"
                  style="height: 100%; max-width: 100%; border-radius: 20%"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row q-pb-lg q-ml-lg">
          <div class="text-white text-bold" style="font-size: 30px">
            {{ student.Fullname }}
          </div>
        </div>

        <div
          class="row"
          @click="
            $router.push({
              name: 'profileDetail',
              query: {
                uid: student.uid,
                SemesterID: getchangSemester,
              },
            })
          "
          push
        >
          <div class="q-ml-md">
            <q-avatar icon="perm_identity" style="color: #96a7af" />
          </div>
          <div class="q-mt-md">
            <div class="titlechoice">Profile</div>
          </div>
        </div>

        <div
          class="row"
          @click="
            $router.push({
              name: 'Welcome',
            })
          "
          push
        >
          <div class="q-ml-md">
            <q-avatar icon="logout" style="color: #96a7af" />
          </div>
          <div class="q-mt-md">
            <div class="titlechoice" @click="Logout">Log out</div>
          </div>
        </div>
      </div>

      <div class="col">
        <q-img
          src="../image/phonebackground.png"
          style="height: 100%; max-width: 100%"
          @click="
            $router.push({
              name: 'Index',
              query: { uid: student.uid ,
               SemesterID: getchangSemester,},
            })
          "
          push
        />
      </div>
    </div>
  </q-page>
</template>
<script>
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
  data() {
    return {
      student: {},
      semester: {},
      getchangSemester:"",
    };
  },
  mounted() {
    this.getStudentData();
    this.getSemesterData();
    this.getchang();
  },
  methods: {
      getchang() {
      this.getchangSemester = this.$route.query.SemesterID;
      
    },
    async getStudentData() {
      const { data } = await this.$axios.get(
        "/student/findStudentID/" + this.$route.query.uid
      );

      this.student = data.student;
    },
    async getSemesterData() {
      const { data } = await this.$axios.get(
        "/semester/getSemester/" + this.$route.query.uid
      );
      this.semester = data.semester;
    },
    Logout() {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => alert(err.message));
    },
  },
};
</script>

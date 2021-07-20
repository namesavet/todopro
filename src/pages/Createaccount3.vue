<template>
  <q-page class="Welcome q-pt-xl">
    <div class="col">
      <div class="Logo q-ml-lg"></div>
      <div class="texttitle1 q-ml-lg q-mt-lg">Sign up</div>
      <div class="texttitle2 q-ml-lg q-mt-sm">to strat working</div>

      <div class="row justify-center items-center">
        <div class="flag q-mt-lg">
          <q-btn-dropdown
            push
            no-caps
            icon="flag"
            label="+31"
            size="20px"
            style="width: 138px; background: #286053; color: #3dd598"
          >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="flag" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>ประเทศ</q-item-label>
                  <q-item-label caption>เลข</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar icon="flag" color="primary" text-color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>ประเทศ</q-item-label>
                  <q-item-label caption>เลข</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="info" color="amber" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>

        <div class="enter-tel col-5 q-mt-lg q-ml-md">
          <q-input v-model="tel" label-color="#96A7AF" label="20 666 13 13" />
        </div>
      </div>

      <div class="row justify-center items-center q-mt-xl">
        <div class="button-back q-mt-lg">
          <q-btn
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
      tel: "",
    };
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
  border-radius: 15%;
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
</style>
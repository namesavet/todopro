<template>
  <q-page @click="$router.push({ name: 'Welcome' })" push class="Begin q-pt-xl">
    <div class="col">
      <div class="texttitle1 q-ml-md">Study Planner</div>
      <div class="texttitle2 q-ml-md q-mt-md">
        <div class="row2-1">Easy to remember with</div>
        <div class="row2-2">the school notes app</div>
      </div>
      <div class="texttitle1 q-ml-md q-mt-md">Let us help !!!</div>
      <div class="texttitle2 q-ml-xl q-mt-md">
        <div class="row">-Remember work</div>
        <div class="row">-Remember the score</div>
        <div class="row">-Remember to read</div>
        <div class="row">-Remember activities</div>
      </div>

      <div class="read-icon absolute-bottom-right" ></div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.Begin {
  background: #ff464f;
}

.texttitle1 {
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.texttitle2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

.read-icon {
  width: 160px;
  height: 210px;
  background: url("../image/read.png");
  background-repeat: no-repeat;
}
</style>
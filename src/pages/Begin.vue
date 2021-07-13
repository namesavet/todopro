<template>
  <q-page class="Begin q-pt-xl">
    <div class="col">
      <div class="texttitle1 q-ml-md">Note School</div>
      <div class="texttitle2 q-ml-md q-mt-md">
        <div class="row2-1">Easy to remember with the</div>
        <div class="row2-2">school notes app</div>
      </div>
      <div class="texttitle1 q-ml-md q-mt-md">Let us help !!!</div>
      <div class="texttitle2 q-ml-xl q-mt-md">
        <div class="row">-remember work</div>
        <div class="row">-remember the score</div>
        <div class="row">-remember to read</div>
        <div class="row">-remember activities</div>
      </div>

      <div
        class="read-icon absolute-bottom-right q-mr-md justify-center "
        style="overflow: hidden"
      >
        <q-img src="../image/read.png" style="height: 100%; max-width: 80%" />
      </div>
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
  width: 150px;
  height: 210px;
  background: #ff464f;
  border-radius: 15%;
}
</style>
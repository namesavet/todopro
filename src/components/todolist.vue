<template>
  <q-container>
    <div class="row justify-center">
      <div class="today">
        <div class="texttitle q-mt-sm q-ml-lg">TODAY DO</div>
      </div>
    </div>

    <div class="row q-mt-md q-px-md">
      <div class="col q-gutter-md">
        <div class="row justify-center">
          <div class="subject" style="overflow: hidden" >
            <div class="texttitle1 q-mt-sm">Subject</div>

            <q-img
              src="../image/subject.png"
              style="height: 100%; max-width: 100%"
            />
          </div>
        </div>
        <div class="row justify-center">
          <div class="read" style="overflow: hidden">
            <div class="texttitle2 q-ml-lg q-mt-sm">
              <div class="row">Read</div>
              <div class="row">a book</div>

              <q-img
                src="../image/read.png"
                style="height: 80%; max-width: 80%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col q-gutter-md">
        <div class="row justify-center">
          <div class="test" style="overflow: hidden">
            <div class="texttitle2 q-ml-lg q-mt-sm">
              <div class="row">Test</div>
              <div class="row">and</div>
              <div class="row">Score</div>
  <div id="testimg">

              <q-img 
                src="../image/test.png"
                style="height: 100%; max-width: 100%"
              />


  </div>
            </div>
          </div>
        </div>
        <div class="row justify-center">
          <div class="calendar" style="overflow: hidden">
            <div class="texttitle1 q-mt-sm">Calendar</div>

            <q-img
              src="../image/calendar.png"
              style="height: 100%; max-width: 100%"
            />
          </div>
        </div>
      </div>
    </div>
  </q-container>
</template>

<script></script>

<style scoped>
.today {
  width: 320px;
  min-height: 180px;
  background: #6952dc;
  border-radius: 25px;
  background-image: url("../image/today.png");
  background-size: 100%;
  background-repeat: none;
}
.subject {
  width: 150px;
  height: 180px;
  background: #ff974a;
  border-radius: 15%;
}
.read {
  width: 150px;
  height: 210px;
  background: #ff565e;
  border-radius: 15%;
}
.test {
  width: 150px;
  height: 210px;
  background: #3ed598;
  border-radius: 15%;
}
.calendar {
  width: 150px;
  height: 180px;
  background: #ffc542;
  border-radius: 15%;
}
.texttitle1 {
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.texttitle2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.texttitle {
  font-size: 25px;
  font-weight: bold;
  color: white;
}
#testimg {
  -webkit-box-reflect: below -10px -webkit-gradient(linear, right top, right bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.5)));
  
}
</style>

<template>
  <q-page class="course">
    <div class="q-pa-md">
      <q-toolbar>
        <q-btn flat round dense text-color="white" icon="keyboard_arrow_left" />

        <q-toolbar-title>
          <div class="text-white text-slim" style="font-size: 20px">Back</div>
        </q-toolbar-title>
        <q-space />

        <q-btn
          dense
          text-color="white"
          icon="settings"
          class="q-mr-xs"
          style="background-color: #40df9f"
        />
      </q-toolbar>
    </div>

    <div class="row q-ml-md">
      <div class="text-white text-bold" style="font-size: 30px">SPI</div>
    </div>

    <div class="row q-ml-md">
      <div class="text-blue-grey-4" style="font-size: 20px">ดร.กุลศิริ</div>
    </div>
    <br />

    <q-page-sticky position=" center" :offset="[0, 0]">
      <div class="background-graph">
        <br />
        <div class="Text-Grade text-white q-ml-lg">Grade</div>
        <div class="row">กราฟ</div>
      </div>
    </q-page-sticky>

    <br />



  

    <div class="row q-mx-md justify-around">
      <div class="text-grey">
        <div class="row justify-center items-baseline">
          <div class="circle-point"></div>
          <div class="q-ml-md">Midterm exam</div>
          
        </div>
      </div>
      <div class="text-grey">
        <div class="row self-center q-ml-md">08 Mar 2020</div>
      </div>

      <div class="text-grey">
        <div class="row justify-center">30%</div></div>
    </div>

      <div class="row q-mx-md justify-around">
      <div class="text-grey">
        <div class="row justify-center items-baseline">
          <div class="circle-point"></div>
          <div class="q-ml-md">Final exam</div>
        </div>
      </div>
      <div class="text-grey">
        <div class="row justify-center">18 May 2020</div>
      </div>
      <div class="text-grey"><div class="row justify-center">30%</div></div>
    </div>




 






    <div class="row q-ml-md">
      <div class="text-white text-bold" style="font-size: 30px">Chapter</div>
    </div>

    <div class="col q-ml-md">
      <div class="row">
        <div class="background-number1">
          <div class="row items-center justify-center q-mt-md text-white">
            1
          </div>
        </div>
        <div class="col">
          <div class="row q-ml-lg text-white q-mt-md">Software Quality</div>
        </div>
      </div>

      <div class="q-mr-lg"><q-separator color="grey" inset="item" /></div>
    </div>

    <br />
    <div class="col q-ml-md">
      <div class="row">
        <div class="background-number2">
          <div class="row items-center justify-center q-mt-md text-white">
            2
          </div>
        </div>
        <div class="col">
          <div class="row q-ml-lg text-white q-mt-md">
            Software Quality Factor
          </div>
        </div>
      </div>

      <div class="q-mr-lg"><q-separator color="grey" inset="item" /></div>
    </div>

    <br />
    <div class="col q-ml-md">
      <div class="row">
        <div class="background-number3">
          <div class="row items-center justify-center q-mt-md text-white">
            3
          </div>
        </div>
        <div class="col">
          <div class="row q-ml-lg text-white q-mt-md">
            Software Process Improve
          </div>
        </div>
      </div>

      <div class="q-mr-lg"><q-separator color="grey" inset="item" /></div>
    </div>

    <br />
    <div class="col q-ml-md">
      <div class="row">
        <div class="background-number4">
          <div class="row items-center justify-center q-mt-md text-white">
            4
          </div>
        </div>
        <div class="col">
          <div class="row q-ml-lg text-grey q-mt-md">Chapter name</div>
        </div>
      </div>

      <div class="q-mr-lg"><q-separator color="grey" inset="item" /></div>
    </div>

    <div class="q-px-sm q-py-lg">
      <div
        class="column items-center"
        style="margin-top: 100px; margin-bottom: 100px"
      >
        <div>
          <div class="row items-center justify-center">
            <q-btn
              text-color="white"
              icon="add"
              style="
                background-color: #40df9f;
                width: 75px;
                height: 75px;
                border-radius: 50%;
                border: 10px solid #286053;
              "
            />
          </div>
        </div>

        <div class="fontaddsubject">Add Chapter</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style scoped>
.course {
  background: #22343c;
}

.background-graph {
  width: 280px;
  height: 280px;
  background: #475e69;
  border-radius: 10%;
}
.background-number1 {
  width: 50px;
  height: 50px;
  background: #ffc542;
  border-radius: 100%;
}

.background-number2 {
  width: 50px;
  height: 50px;
  background: #3ed598;
  border-radius: 100%;
}

.background-number3 {
  width: 50px;
  height: 50px;
  background: #ff565e;
  border-radius: 100%;
}

.background-number4 {
  width: 50px;
  height: 50px;
  background: #ffc542;
  border-radius: 100%;
}
.fontaddsubject {
  color: #3ed598;
}

.background-icon {
  width: 75px;
  height: 75px;
  background: #286053;
  border-radius: 50%;
}
.Text-Grade {
  font-size: 20px;
}

.circle-point {
  width: 10px;
  height: 10px;
  background: #ff565e;
  border-radius: 100%;
}
</style>



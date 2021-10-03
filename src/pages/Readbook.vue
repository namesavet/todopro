<template>
  <q-page class="addbackground">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          flat
          color=""
          @click="$router.push({ name: 'Index' })"
          push
          icon="keyboard_arrow_left"
          label="Back"
          style="font-size: 16px; color: #96a7af"
        />
      </q-toolbar-title>
    </q-toolbar>

    <div class="row">
      <div class="col q-ml-md q-mt-sm q-gutter-xs">
        <div class="text-white text-bold" style="font-size: 30px">
          Read a book
        </div>
      </div>
    </div>
    
    <div class="items-center row justify-center">
    <div class="readprogress" style="overflow: hidden">
      <div class="row justify-center q-mt-sm q-px-md">
        <div class="col items-center" >
          <div style="width: 90%; height: 90%">

             <canvas
            id="my-chart"
            class=""
            style="display: block;
                   width: 90%;
                    height: 90%;
                      }"
          >
          </canvas>
          </div>
         
        </div>

        <div class="col">
          <div class="row">
            <div class="col q-ml q-mt-sm q-gutter-xs">
              <div class="text-white text-bold" style="font-size: 18px">
                Read progress
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-1 q-mt-xs">
              <div class="welldonetier"></div>
            </div>
            <div class="col-10 q-ml-sm">
              <div class="texttier">welldone read</div>
            </div>
          </div>

          <div class="row">
            <div class="col-1 q-mt-xs">
              <div class="goodtier"></div>
            </div>
            <div class="col-10 q-ml-sm">
              <div class="texttier">good read</div>
            </div>
          </div>

          <div class="row">
            <div class="col-1 q-mt-xs">
              <div class="badtier"></div>
            </div>
            <div class="col-10 q-ml-sm">
              <div class="texttier">not good</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusred q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="south" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">OOP 63</div>
            </div>
            <div class="col-3">
              <div class="percenred">15%</div>
            </div>
          </div>

          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress1"
              color="red"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="north" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">Data Sci 63</div>
            </div>
            <div class="col-3">
              <div class="percenyellow">70%</div>
            </div>
          </div>

          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress2"
              color="yellow"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusgreen q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="star" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">UX/UI 63</div>
            </div>
            <div class="col-3">
              <div class="percengreen">98%</div>
            </div>
          </div>

          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress3"
              color="green"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="namebook q-ml-lg q-mt-lg"
      @click="$router.push({ name: 'ReadDetail' })"
      push
      style="overflow: hidden"
    >
      <div class="row justify-center">
        <div class="col">
          <div class="statusyellow q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="north" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">SPI</div>
            </div>
            <div class="col-3">
              <div class="percenyellow">66%</div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress4"
              color="yellow"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="namebook" style="overflow: hidden">
      <div class="row justify-center">
        <div class="col">
          <div class="statusred q-ml-lg q-mt-lg" style="overflow: hidden">
            <div class="row items-center justify-center q-mt-md">
              <q-icon name="south" class="" size="24px" style="color: white" />
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="row q-mt-md">
            <div class="col">
              <div class="titlesubject">Software contructure</div>
            </div>
            <div class="col-3">
              <div class="percenred">15%</div>
            </div>
          </div>
          <div class="row q-mt-lg">
            <q-linear-progress
              dark
              rounded
              size="16px"
              :value="progress1"
              color="red"
              class=""
              style="width: 90%"
            />
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="row q-mt-xl">
      <q-footer elevated>
        <q-toolbar
          class="shadow-2"
          style="
            background: #30444e;
            color: white;
            bottom: 0;
            position: absolute;
            width: 100%;
            border-radius: 15px 15px 0px 0px;
          "
        >
          <q-toolbar-title class="row justify-evenly">
            <q-btn flat name="calendar" icon="calendar_today" />
            <q-btn flat name="home" icon="home" />
            <q-btn flat name="book" icon="menu_book" />
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </div>
  </q-page>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      progress1: 0.15,
      progress2: 0.7,
      progress3: 0.98,
      progress4: 0.66,
    };
  },
  components: {},
  mounted: function () {
    var ctx = document.getElementById("my-chart");
    var myChart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            label: "Page A",
            data: [25, 50, 25],
            backgroundColor: ["#FFC542", "#3DD598", "#FF575F"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  },
};
</script>

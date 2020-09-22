<!--Record windows select-->
<template>
  <div>
    <div class="mytab">
      <v-tabs v-bind="tabsOptions" v-model="tab">
        <!--Tabs-->
        <v-tab v-for="(item, i) in tabData" :key="i">{{item.text}}</v-tab>

        <v-tabs-items v-model="tab" dark>
          <v-tab-item v-for="(item, i) in tabData" :key="i">
            <v-card>
              <!--Window select-->
              <div
                v-for="(source,i) in item.id=='screen' ? purifyArray(screenSources):purifyArray(windowSources)"
                :key="i"
              >
                <img :src="pngToB64(source.thumbnail.toPNG())" />
              </div>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <!-- <v-tab-item v-for="i in 2" :key="i" v-model="tab">
          <v-card flat tile>
            <v-card-text>test</v-card-text>
          </v-card>
        </v-tab-item>-->
      </v-tabs>
    </div>

    <br />
  </div>
</template>

<script>
//Lib
import * as record from "../util/screen-record";
import { desktopCapturer } from "electron";

export default {
  data() {
    return {
      tab: null,
      //For tabs
      tabData: [
        {
          text: "your enitre screen",
          id: "screen",
        },
        {
          text: "application window",
          id: "window",
        },
      ],
      tabsOptions: {
        "background-color": "var(--background-color)!important",
        "slider-color": "var(--main-color)!important",
        color: "var(--main-color)!important",
        dark: true,
        grow: true,
        // centered: true,
      },
      //For sources
      screenSources: [],
      windowSources: [],
      options: {
        thumbnailSize: {
          width: 350,
          height: 350,
        },
        fetchWindowIcons: true,
      },
    };
  },
  methods: {
    //Array purify (Sort and delete unsed window)
    purifyArray(array) {
      //Filter dragged window
      array = array.filter((item) => item.name !== "Drag");
      //Sort by id
      array = array.slice().sort(function (a, b) {
        return a.id.replace(/^\D+/g, "") > b.id.replace(/^\D+/g, "") ? 1 : -1;
      });
      return array;
    },

    async updateSources() {
      //Promise all to wait for all call return and store it in dedicated variables
      [this.screenSources, this.windowSources] = await Promise.all([
        this.getSources(["screen"]),
        this.getSources(["window"]),
      ]);

      //Get sources update per 1 second
      setTimeout(this.updateSources, 1000);
    },

    /**
     * @param {Array} type Get which type of source
     */
    getSources(type) {
      let vm = this;
      return desktopCapturer.getSources({ types: type, ...vm.options });
    },

    pngToB64(pngImage) {
      //source.thumbnail.toPNG()
      return "data:image/png;base64," + new Buffer(pngImage).toString("base64");
    },
  },
  mounted() {
    this.updateSources();
  },
};
</script>

<style lang="scss" scoped>
.mytab {
  position: sticky;
  top: 0;
}

::v-deep .v-tab {
  font-family: "roboto", sans-serif;
  text-transform: capitalize !important;
  letter-spacing: 0.5px;
}
</style>

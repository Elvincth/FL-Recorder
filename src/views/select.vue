<!--Record windows select-->
<template>
  <div>
    <div class="mytab">
      <v-tabs v-bind="tabsOptions">
        <v-tab>your enitre screen</v-tab>
        <v-tab>application window</v-tab>
      </v-tabs>
    </div>

    <br />

    <div v-for="(source,i) in purifyArray(sources)" :key="i">
      <img :src="pngToB64(source.thumbnail.toPNG())" />
    </div>
  </div>
</template>

<script>
//Lib
import * as record from "../util/screen-record";
import { desktopCapturer } from "electron";

export default {
  data() {
    return {
      tabsOptions: {
        "background-color": "var(--background-color)!important",
        "slider-color": "var(--main-color)!important",
        color: "var(--main-color)!important",
        dark: true,
        grow: true,
        centered: true,
      },
      //For sources
      sources: [],
      options: {
        types: ["window", "screen"],
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

    async getSources() {
      let vm = this;

      //Get sources update per 1 second

      await setInterval(async () => {
        await desktopCapturer.getSources(vm.options).then(async (sources) => {
          vm.sources = sources;
        });
      }, 1000);
    },

    pngToB64(pngImage) {
      //source.thumbnail.toPNG()
      return "data:image/png;base64," + new Buffer(pngImage).toString("base64");
    },
  },
  mounted() {
    this.getSources();
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

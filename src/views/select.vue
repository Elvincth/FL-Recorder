<!--Record windows select-->
<template>
  <div>
    <div v-for="(source,i) in sortArray(sources)" :key="i">
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
      sources: [],
      options: {
        types: ["window", "screen"],
        fetchWindowIcons: true,
      },
    };
  },
  methods: {
    
    sortArray(array) {
      return array.slice().sort(function (a, b) {
        return a.id.replace( /^\D+/g, '') > b.id.replace( /^\D+/g, '') ? 1 : -1;
      });
    },

    async getSources() {
      let vm = this;
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

<style lang="scss" scoped></style>

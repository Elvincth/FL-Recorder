<template>
  <simplebar class="select-popover-wrapper">
    <a v-close-popover>Close</a>
    <!--Window select-->
    <div class="container">
      <div
        v-for="(source,i) in sourceType=='screen' ? purifyArray(screenSources):purifyArray(windowSources)"
        :key="i"
      >
        <img :src="pngToB64(source.thumbnail.toPNG())" />
      </div>
    </div>
  </simplebar>
</template>

<script>
import recorderMixin from "../../util/record-mixin";
import simplebar from "simplebar-vue";

export default {
  components: { simplebar },
  props: {
    sourceType: {
      type: String,
      default: "screen",
    },
  },
  mixins: [recorderMixin],
};
</script>

<style lang="scss" scoped>
.select-popover-wrapper {
  height: 250px;
  width: 300px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
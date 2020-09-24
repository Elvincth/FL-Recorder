<template>
  <simplebar class="select-popover-wrapper">
    <!-- <a v-close-popover>Close</a> -->
    <div>
      <iconButton size="1rem">close</iconButton>
    </div>
    <!--Window select-->
    <div class="select-popover-container" v-close-popover>
      <div
        v-for="(source, i) in sourceType == 'screen'
          ? purifyArray(screenSources)
          : purifyArray(windowSources)"
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
import iconButton from "@/components/toolbar/icon-button";

export default {
  components: {
    simplebar,
    iconButton,
  },
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
$popover-height: 290px;
$popover-width: 290px;

.select-popover-wrapper {
  height: $popover-height;
  width: $popover-width;
}

.select-popover-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.2rem 1rem;
  // padding-right: 15px;
}
</style>
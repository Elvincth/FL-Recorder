<template>
  <simplebar class="select-popover-wrapper">
    <!--Header-->
    <div class="select-popover-header">
      <iconButton
        :buttonOptions="{ 'x-small': true }"
        style="margin-left: auto"
        size="1rem"
        v-close-popover
        >close
      </iconButton>
    </div>

    <!--Window select-->
    <div class="select-popover-container">
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

.select-popover- {
  &wrapper {
    height: $popover-height;
    width: $popover-width;
  }

  &header {
    display: flex;
    //TRBL
    margin: 0.5rem 1rem 0 0;
  }

  &container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 1.2rem 1.2rem 1rem;
    // padding-right: 15px;
  }
}
</style>
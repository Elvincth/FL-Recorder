<template>
  <simplebar class="select-popover-wrapper">
    <!--Header-->
    <div class="select-popover-header">
      <span class="title">Select a screen</span>
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
        <screenThumbnail :src="pngToB64(source.thumbnail.toPNG())" />
      </div>
    </div>
  </simplebar>
</template>

<script>
import recorderMixin from "../../util/record-mixin";
import simplebar from "simplebar-vue";
import iconButton from "@/components/toolbar/icon-button";
import screenThumbnail from "@/components/shared/screen-thumbnail";

export default {
  components: {
    simplebar,
    iconButton,
    screenThumbnail,
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
.select-popover- {
  &wrapper {
    max-height: 290px;
    min-height: 200px;
    width: 290px;
  }

  &header {
    display: flex;
    align-items: center;
    position: relative;
    //TRBL
    margin: 0.6rem 1rem 0.6rem 1rem;
    .title {
      font-size: 1rem;
      position: absolute;
      white-space: nowrap;
      left: 50%;
      transform: translate(-50%, 0);
    }
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
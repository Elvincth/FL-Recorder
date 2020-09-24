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
        <screenSelect
          :src="pngToB64(source.thumbnail.toPNG())"
          :name="`Screen ${i + 1}`"
        />
      </div>
    </div>
  </simplebar>
</template>

<script>
import recorderMixin from "../../util/record-mixin";
import simplebar from "simplebar-vue";
import iconButton from "@/components/toolbar/icon-button";
import screenSelect from "@/components/shared/screen-select";

export default {
  components: {
    simplebar,
    iconButton,
    screenSelect,
  },
  props: {
    sourceType: {
      type: String,
      default: "screen",
    },
  },
  mixins: [recorderMixin],
  mounted(){}
};
</script>

<style lang="scss" scoped>
$popover-radius: var(--popover-border-radius);

.select-popover- {
  &wrapper {
    max-height: 290px;
    min-height: 200px;
    width: 275px;
  }

  &header {
    display: flex;
    align-items: center;
    background-color: var(--popover-header-color);
    border-width: 0;
    border-radius: $popover-radius $popover-radius 0 0;
    //Stay on top
    position: sticky;
    top: 0;
    //TRBL
    padding: 0.7rem 1rem 0.6rem 1rem;
    .title {
      font-size: 1.05rem;
      // position: absolute;
      white-space: nowrap;
      // left: 50%;
      // font-weight: 500;
      // transform: translate(-50%, 0);
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
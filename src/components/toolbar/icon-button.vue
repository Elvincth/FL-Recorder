<template>
  <div class="item icon no-drag">
    <v-btn icon color="var(--icon-button)">
      <span class="material-icons" :style="`font-size: ${size}`">
        <!--Name of the icob-->
        <slot></slot>
      </span>
    </v-btn>
  </div>
</template>

<script>
export default {
  /**
   * @property {String|CSS size unit} size font size of the icon
   */
  props: {
    size: String,
  },
};
</script>

<style lang="scss" scoped>
//Disbale dragging area
.no-drag {
  -webkit-app-region: no-drag;
}

//Color of the icon
.material-icons {
  color: var(--icon-button);
}
</style>
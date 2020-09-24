<template>
  <div class="item icon no-drag">
    <v-btn icon color="var(--icon-button)" v-bind="buttonOptions">
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
   * @property {Object} buttonOptions vuetify button option
   */
  props: {
    size: { type: String, default: "2rem" },
    buttonOptions: { type: Object, default: { large: true } },
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
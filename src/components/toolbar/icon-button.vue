<template>
  <div class="item icon no-drag">
      <!--Tooltop-->
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="var(--icon-button)" large v-bind="attrs" v-on="on">
          <span class="material-icons" :style="`font-size: ${size}`">
            <!--Name of the icob-->
            <slot></slot>
          </span>
        </v-btn>
      </template>
      <span>Tooltip</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  /**
   * @property {String|CSS size unit} size font size of the icon
   */
  props: {
    size: { type: String, default: "2rem" },
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
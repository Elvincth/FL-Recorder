<template>
  <div class="main">
    <!--Recorder Indicator-->
    <div class="item">
      <div class="indicator"></div>
    </div>
    <!--Timer-->
    <div class="item timer-wrapper">
      <timer></timer>
    </div>

    <!--Button Screen Record-->
    <div v-tooltip.top="'Display'" class="item">
      <v-popover v-bind="popoverOptions">
        <iconButton size="1.5rem">desktop_windows</iconButton>
        <template slot="popover">
          <selectPopover></selectPopover>
        </template>
      </v-popover>
    </div>

    <!--Button Window Record-->
    <iconButton size="1.7rem" v-tooltip.top="'Window'">web_asset</iconButton>
    <!--Button Screen Record-->
    <iconButton size="1.5rem" v-tooltip.top="'Settings'">tune</iconButton>
    <!--Button More-->
    <iconButton size="1.6rem" v-tooltip.top="'More'">more_horiz</iconButton>
    <!--Button Screen Record-->
    <iconButton @click.native="minimize" size="1.2rem" v-tooltip.top="'Minimize'">visibility_off</iconButton>
  </div>
</template>

<script>
//components
import timer from "../components/home/timer";
import iconButton from "../components/toolbar/icon-button";
import selectPopover from "../components/toolbar/select-popover";
//lib
import { remote } from "electron";

export default {
  components: {
    timer,
    iconButton,
    selectPopover,
  },
  data() {
    return {
      //popover options
      popoverOptions: {
        placement: "bottom",
        autoHide: true,
        popoverClass: "my-popover",
      },
    };
  },
  methods: {
    minimize() {
      remote.BrowserWindow.getFocusedWindow().minimize();
    },
  },
  mounted() {
    // //minimize on body click
    // document.documentElement.addEventListener("click", () => {
    //   this.minimize();
    // });
  },
};
</script>

<style lang="scss">
body,
html {
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

//Popover style
.popover {
  margin-bottom: 17px !important;
  margin-left: 5px;
}
</style>

<style lang="scss" scoped>
$indicator-size: 1rem;
$window-height: 60px;
$window-width: 490px;

::v-deep .timer {
  font-size: 1.78rem;
}

//Icon button style
::v-deep .theme--light.v-btn.v-btn--icon {
  color: var(--icon-button);
}

//Disbale dragging area
.no-drag {
  -webkit-app-region: no-drag;
}

.timer-wrapper {
  margin-left: 1.5rem;
  margin-right: 1rem;
}

.indicator {
  width: $indicator-size;
  height: $indicator-size;
  background-image: url("../assets/icons/indicator.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

.main {
  -webkit-app-region: drag;
  width: $window-width;
  height: $window-height;
  border-radius: 0.5rem;
  background-color: transparent;
  background-color: var(--background-color); // rgba(0, 0, 0, 0.8)
  padding: 1rem 1.5rem;
  display: flex;
  position: absolute;
  bottom: 0;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  //For icon container
  &.icon {
    margin-left: 1rem;
  }
}
</style>
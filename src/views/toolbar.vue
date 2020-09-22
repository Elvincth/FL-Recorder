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

    <!--Button Window Record-->
    <iconButton>web_asset</iconButton>
    <!--Button Screen Record-->
    <iconButton>fullscreen</iconButton>
    <!--Button Screen Record-->
    <iconButton>tune</iconButton>
  </div>
</template>

<script>
import timer from "../components/home/timer";
import iconButton from "../components/toolbar/icon-button";

export default {
  components: {
    timer,
    iconButton,
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
</style>

<style lang="scss" scoped>
$indicator-size: 18px;
$window-height: 65px;
$window-width: 500px;

::v-deep .timer {
  font-size: 1.8rem;
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
  background-color: var(--background-color);
  padding: 1rem 1.5rem;
  display: flex;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    //For icon container
    &.icon {
      margin-left: 1rem;
    }
  }
}
</style>
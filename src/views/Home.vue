<template>
  <div>
    <!--Title-->
    <div class="title-container">
      <div class="logo" />
      <div class="timer-wrapper">
        <timer></timer>
      </div>
    </div>

    <separator>Capture</separator>

    <!--Capture-->
    <div class="capture-container">
      <div class="item">
        <fabButton @click.native="screenRecord" iconFile="laptop.svg">Screen</fabButton>
      </div>
      <div class="item">
        <fabButton iconFile="videocam.svg">Camera</fabButton>
      </div>
    </div>
  </div>
</template>

<script>
import timer from "../components/home/timer";
import separator from "../components/shared/separator";
import fabButton from "../components/shared/fab-button";
import { desktopCapturer } from "electron";

export default {
  components: {
    timer,
    separator,
    fabButton,
  },
  mounted() {
    console.log(process.versions.electron);
  },
  methods: {
    screenRecord() {
      desktopCapturer.getSources(
        { types: ["window", "screen"], fetchWindowIcons: true },
        (error, sources) => {
          if (error) throw error;
          for (let source of sources) {
            let image = new Buffer(source.thumbnail.toPNG()).toString("base64");
            console.log(source);
          }
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.capture-container {
  display: flex;
  justify-content: center;
  margin: 1rem;
  & > .item:not(:first-child) {
    margin-left: 1.5rem;
  }
}

.title-container {
  display: flex;
  margin: 2rem;
  align-items: center;

  .timer-wrapper {
    margin-left: auto;
  }

  .logo {
    width: 58px;
    height: 58px;
    background-image: url("../assets/logo.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>

<style lang="scss">
body {
  background-color: var(--background-color);
}
</style>

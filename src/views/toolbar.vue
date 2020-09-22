<template>
  <div class="main">
    <div class="item">
      <div class="indicator"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body,
html {
  overflow: hidden;
}

body {
  width: 100%;
  height: 100%;
  background: transparent;
}
</style>

<style lang="scss" scoped>

.indicator {
  width: 15px;
  height: 15px;
  background-image: url("../assets//icons/indicator.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

.main {
  -webkit-app-region: drag;
  width: 500px;
  height: 70px;
  border-radius: 0.5rem;
  background-color: var(--background-color);
  padding: 1rem 1.5rem;

  display: flex;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
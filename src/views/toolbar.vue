<template>
  <div class="main">
    <div class="item"></div>
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
.main {
  -webkit-app-region: drag;
  width: 500px;
  height: 70px;
  border-radius: 0.5rem;
  background-color: var(--background-color);
  display: flex;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
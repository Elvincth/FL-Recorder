<template>
  <div class="main">Toolbar view</div>
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

.main {
  -webkit-app-region: drag;
  width: 500px;
  height: 70px;
  border-radius: 0.5rem;
  background-color: var(--background-color);
}
</style>
<template>
  <div class="select-wrapper">
    <img :src="src" />
    <span class="name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    src: String, //SRC link of the image
    name: String, //name of the display window or screen
  },
};
</script>

<style scoped lang="scss">
.select-wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem;
  // border-radius: 8px;
  //Screen name style
  .name {
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
}
</style>
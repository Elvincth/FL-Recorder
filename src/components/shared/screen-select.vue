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
  padding: 0.7rem 0.7rem 0.5rem 0.7rem;
  transition: all 0.15s;
  border-radius: 5px;
  //Screen name style

  .name {
    margin-top: 0.5rem;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
}
</style>
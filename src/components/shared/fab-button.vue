<template>
  <div class="my-fab-btn">
    <button :style="myStyle"></button>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    iconFile: String, //Icon file name @/assets/icons/(File name)
  },
  data() {
    return {
      myStyle: {
        backgroundImage: `url(${require("@/assets/icons/" + this.iconFile)})`,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.my-fab-btn {
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: 300;
  }
  button {
    width: 72px;
    height: 72px;
    background-color: var(--round-button);
    border-radius: 50%;
    outline: 0;
    border: 0;
    cursor: pointer;
    transition: all 0.1s;
    background-repeat: no-repeat;
    background-position: center center;

    &:hover {
      filter: brightness(1.25);
    }
    &:active {
      filter: brightness(0.95);
      transform: scale(0.98);
    }
  }
}
</style>
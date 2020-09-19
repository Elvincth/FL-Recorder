<template>
  <div class="separator">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.separator {
  height: 39px;
  width: 100%;
  display: flex;
  background-color: var(--separator);
  span {
    margin: auto 0;
    margin-left: 1.3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
}
</style>
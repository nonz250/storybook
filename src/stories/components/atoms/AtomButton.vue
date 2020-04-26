<template>
  <button
    :class="buttonClass"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'AtomButton',
  props: {
    color: {
      type: String,
      default: 'default',
    }
  },
  computed: {
    buttonClass() {
      return 'btn btn-' + this.color;
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/button";
</style>
<template>
  <button
    :class="buttonClass"
    @click="click"
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
  },
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/app";
</style>
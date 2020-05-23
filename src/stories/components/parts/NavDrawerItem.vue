<template>
  <div>
    <div
      class="nav-drawer__item p-2"
      @click="click"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavDrawerItem',
  methods: {
    click() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/app.scss";
</style>
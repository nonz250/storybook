<template>
  <div>
    <div
      class="nav-drawer__item p-2"
      @click="this.$emit('click')"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavDrawerItem',
};
</script>

<style lang="scss" scoped>
    @import "../../sass/app.scss";
</style>
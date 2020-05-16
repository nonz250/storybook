<template>
  <div>
    <div
      class="nav-drawer"
      :class="{'nav-drawer__close': !drawer, 'nav-drawer__open': drawer}"
    >
      <div class="nav-drawer__header">
        title
        <span class="nav-drawer__header__icon" />
      </div>
      <slot />
    </div>
    <div
      v-show="drawer"
      class="nav-close"
      :class="{'nav-close__active': drawer}"
      @click="drawer = false"
    />
  </div>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: '',
    }
  },
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    @import "../../sass/app.scss";
</style>
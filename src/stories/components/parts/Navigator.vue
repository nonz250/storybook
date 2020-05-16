<template>
  <nav class="navigator navigator__light">
    <div
      v-if="drawer"
      class="navigator__icon"
      @click="open = !open"
    >
      <i class="fas fa-bars" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigator',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    open: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/app.scss";
</style>
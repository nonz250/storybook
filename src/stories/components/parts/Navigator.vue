<template>
  <nav class="navigator navigator__light">
    <div
      v-if="drawer"
      class="navigator__icon"
      @click="open = !open"
    >
      <i class="fas fa-bars" />
    </div>
    <div class="navigator__action">
      <atom-button>action1</atom-button>
      <atom-button>action2</atom-button>
    </div>
  </nav>
</template>

<script>
import AtomButton from '../atoms/AtomButton';
export default {
  name: 'Navigator',
  components: {AtomButton},
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
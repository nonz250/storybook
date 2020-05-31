<template>
  <div>
    <label style="cursor: pointer;">
      <input
        v-model="check"
        type="checkbox"
        class="checkbox"
      ><atom-button
        :outline="!check"
        style="pointer-events: none;"
        @click="check = !check"
      >チェックボックス</atom-button>
    </label>
  </div>
</template>

<script>
import AtomButton from './AtomButton';
export default {
  name: 'AtomCheckBox',
  components: {AtomButton},
  props: {
    value: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    check: {
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
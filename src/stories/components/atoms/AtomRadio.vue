<template>
  <div>
    <label style="cursor: pointer;">
      <input
        v-model="radio"
        type="radio"
        class="radio"
      ><atom-button
        :outline="!radio"
        style="pointer-events: none;"
        @click="radio = true"
      >
        ラジオボタン
      </atom-button>
    </label>
  </div>
</template>
<script>
import AtomButton from './AtomButton';
export default {
  name: 'AtomRadio',
  components: {AtomButton},
  props: {
    value: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    radio: {
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
  @import "../../sass/app";
</style>
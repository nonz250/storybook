<template>
  <div class="select-container">
    <select
      v-model="select"
      class="select"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AtomSelect',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
  computed: {
    select: {
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
<template>
  <div>
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
    >
      <div
        v-if="index !== 0"
        class="step-line"
        :class="{'step-line__complete': isActive(index) || isComplete(index), 'step-line__failed': isFailed(index)}"
      />
      <span 
        class="step-number"
        :class="{'step-number__active': isActive(index), 'step-number__failed': isFailed(index), 'step-number__complete': isComplete(index)}"
      >
        <span v-if="isFailed(index)">✕</span>
        <span v-else-if="isActive(index)">✓</span>
        <span v-else>{{ index + 1 }}</span>
      </span>
      <span class="step-text">{{ step.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  props:{
    steps: {
      type: Array,
      required: true,
    },
    number: {
      type: Number,
      default: 1,
    },
    failed: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    isActive(index) {
      return this.number === index + 1;
    },
    isComplete(index) {
      return this.number > index + 1;
    },
    isFailed(index) {
      return this.isActive(index) && this.failed;
    }
  }
};
</script>

<style lang="scss" scoped>
$step_color: blue;
$step_default_color: gray;
$step_failed_color: red;
.step {
  margin: 0;
  padding: 0;
  display: inline-block;
}
.step-line {
  display: inline-block;
  min-width: 100px;
  margin-bottom: calc(0.5rem - 1px);
  margin-right: 1rem;
  margin-left: 1rem;
  border-top: 1px $step_default_color solid;
  &__complete {
    border-top: 1px $step_color solid;
  }
  &__failed {
    border-top: 1px $step_failed_color solid;
  }
}
.step-number {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  padding: 0.3rem;
  text-align: center;
  display: inline-block;
  color: $step_default_color;
  border: 1px solid $step_default_color;
  border-radius: 50%;
  background-color: white;
  &__complete {
    color: $step_color;
    border: 1px solid $step_color;
  }
  &__active {
    color: white;
    border: 1px solid $step_color;
    background-color: $step_color;
  }
  &__failed {
    color: white;
    border: 1px solid $step_failed_color;
    background-color: $step_failed_color;
  }
}
.step-text {
  font-weight: bold;
}
</style>
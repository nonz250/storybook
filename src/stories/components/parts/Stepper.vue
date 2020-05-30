<template>
  <div class="stepper">
    <template
      v-for="(step, index) in steps"
    >
      <div
        v-if="index !== 0"
        :key="index"
        class="step-line"
        :class="{'step-line__complete': isActive(index) || isComplete(index), 'step-line__failed': isFailed(index)}"
      />

      <span
        :key="index"
        class="step-number-wrap"
      >
        <span
          class="step-number"
          :class="{'step-number__active': isActive(index), 'step-number__failed': isFailed(index), 'step-number__complete': isComplete(index)}"
        >
          <span v-if="isFailed(index)">✕</span>
          <span v-else-if="index + 1 === steps.length">✓</span>
          <span v-else>{{ index + 1 }}</span>
        </span>
        <span
          class="step-text"
          :class="{'step-text__active': isActive(index), 'step-text__failed': isFailed(index), 'step-text__complete': isComplete(index)}"
        >
          {{ step.text }}
        </span>
      </span>
    </template>
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
.stepper {
  $step_color: blue;
  $step_default_color: gray;
  $step_failed_color: red;

  $step_text_default_color: #ddd;
  $step_text_active_color: #000;

  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;

  .step-line {
    display: block;
    border-top: 1px $step_default_color solid;
    margin: 0 0.5rem;
    align-self: center;
    flex: 1 1 0;
    max-width: 100%;

    &__complete {
      border-top: 1px $step_color solid;
    }

    &__failed {
      border-top: 1px $step_failed_color solid;
    }
  }

  .step-number-wrap {
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex-direction: row;

    .step-number {
      width: calc(2rem + 2px);
      line-height: 2rem;
      margin: 0 -2px;
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
      margin-left: 0.5rem;
      color: $step_text_default_color;
      &__complete {
        color: $step_text_active_color;
      }

      &__active {
        color: $step_text_active_color;
      }

      &__failed {
      }
    }
  }

  //スマホの場合はテキスト無し
  @media only screen and (max-width: 768px) {
    .step-number-wrap {
      flex: none;
      .step-text {
        display: none;
      }
    }
  }
}
</style>
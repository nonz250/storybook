<template>
  <div>
    <div style="margin: 1rem;">
      <stepper
        :steps="steps"
        :number="number"
        :failed="failed"
      />
    </div>
    <div style="margin: 1rem;">
      <label>
        active-number:
        <input
          v-model="number"
          type="number"
        >
      </label>
      <atom-button
        color="primary"
        @click="subNumber"
      >
        前へ
      </atom-button>
      <atom-button
        color="primary"
        @click="addNumber"
      >
        次へ
      </atom-button>
    </div>
    <div style="margin: 1rem;">
      <label>
        <input
          v-model="failed"
          type="checkbox"
        >falied
      </label>
    </div>
  </div>
</template>

<script>
import Stepper from '../components/parts/Stepper';
import AtomButton from '../components/atoms/AtomButton';
export default {
  name: 'StepperPage',
  components: {AtomButton, Stepper},
  data() {
    return {
      steps: [
        {text: 'test01'},
        {text: 'test02'},
        {text: 'test03'},
        {text: 'test04'},
      ],
      number: 1,
      failed: false,
    };
  },
  methods: {
    addNumber() {
      if (this.number < this.steps.length) {
        this.number = this.number + 1;
      }
    },
    subNumber() {
      if (this.number > 1) {
        this.number = this.number - 1;
      }
    }
  }
};
</script>

<style scoped>

</style>
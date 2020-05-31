<template>
  <div>
    <div class="row">
      <div class="col">
        <atom-checkbox v-model="check1" />check1: {{ check1 }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="button-group">
          <atom-checkbox v-model="check2" />
          <atom-checkbox v-model="check3" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        check2: {{ check2 }}
        check3: {{ check3 }}
      </div>
    </div>
  </div>
</template>

<script>
import AtomCheckbox from '../components/atoms/AtomCheckbox';

export default {
  name: 'CheckBoxPage',
  components: {AtomCheckbox},
  data() {
    return {
      check1: false,
      check2: false,
      check3: false,
    };
  }
};
</script>

<style lang="scss" scoped>
    @import "../sass/app.scss";
</style>
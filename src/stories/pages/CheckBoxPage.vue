<template>
  <div>
    <div class="row">
      <div class="col">
        <atom-check-box v-model="check1" />check1: {{ check1 }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="button-group">
          <atom-check-box v-model="check2" />check2: {{ check2 }}
          <atom-check-box v-model="check3" />check3: {{ check3 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AtomCheckBox from '../components/atoms/AtomCheckBox';

export default {
  name: 'CheckBoxPage',
  components: {AtomCheckBox},
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
<template>
  <div>
    <div class="row">
      <div class="col">
        <atom-radio v-model="radio1" />radio1: {{ radio1 }}
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="button-group">
          <atom-radio v-model="radio2" />
          <atom-radio v-model="radio3" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        radio2: {{ radio2 }}
        radio3: {{ radio3 }}
      </div>
    </div>
  </div>
</template>

<script>
import AtomRadio from '../components/atoms/AtomRadio';
export default {
  name: 'RadioPage',
  components: {AtomRadio},
  data(){
    return {
      radio1: false,
      radio2: false,
      radio3: false,
    };
  }
};
</script>

<style lang="scss" scoped>
    @import "../sass/app";
</style>

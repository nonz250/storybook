<template>
  <div>
    <div class="row">
      <div class="col m-3">
        <atom-input-text
          v-model="text"
          placeholder="test"
        />
      </div>
      <div class="col m-3">
        input: {{ text }}
      </div>
    </div>
    <div class="row">
      <div class="col m-3">
        <atom-input-text
          v-model="errored"
          placeholder="placeholder"
          description="description"
        />
      </div>
      <div class="col m-3">
        input: {{ errored }}
      </div>
    </div>
  </div>
</template>

<script>
import AtomInputText from '../components/atoms/AtomInputText';

export default {
  name: 'InputPage',
  components: {AtomInputText},
  data() {
    return {
      text: '',
      errored: '',
    };
  }
};
</script>

<style lang="scss" scoped>
    @import "../sass/app";
</style>
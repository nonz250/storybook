<template>
  <div>
    <div>
      <atom-radio />
    </div>
    <div class="">
      <atom-radio />
      <atom-radio />
    </div>
  </div>
</template>

<script>
import AtomRadio from '../components/atoms/AtomRadio';
export default {
  name: 'RadioPage',
  components: {AtomRadio}
};
</script>

<style lang="scss" scoped>
    @import "../sass/app";
</style>

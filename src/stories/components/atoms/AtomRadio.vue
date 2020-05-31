<template>
  <div>
    <input
      type="radio"
      class="radio"
    ><atom-button>ラジオボタン</atom-button>
  </div>
</template>
<script>
import AtomButton from './AtomButton';
export default {
  name: 'AtomRadio',
  components: {AtomButton}
};
</script>
<style lang="scss" scoped>
  @import "../../sass/app";
</style>
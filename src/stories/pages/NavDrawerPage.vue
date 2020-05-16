<template>
  <div>
    <nav-drawer
      v-model="drawer"
    >
      test
    </nav-drawer>
    <div>
      <atom-button
        @click="drawer = true"
      >
        表示
      </atom-button>
    </div>
  </div>
</template>

<script>
import NavDrawer from '../components/parts/NavDrawer';
import AtomButton from '../components/atoms/AtomButton';
export default {
  name: 'NavDrawerPage',
  components: {AtomButton, NavDrawer},
  data() {
    return {
      drawer: false,
    };
  }
};
</script>

<style scoped>

</style>
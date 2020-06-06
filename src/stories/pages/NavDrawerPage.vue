<template>
  <div>
    <nav-drawer
      v-model="drawer"
      title="title"
    >
      <nav-drawer-item>test01</nav-drawer-item>
      <nav-drawer-item>test02</nav-drawer-item>
      <atom-button
        outline
        primary
        block
        large
      >
        test03
      </atom-button>
      <nav-drawer-item>test04</nav-drawer-item>
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
import NavDrawerItem from '../components/parts/NavDrawerItem';
export default {
  name: 'NavDrawerPage',
  components: {NavDrawerItem, AtomButton, NavDrawer},
  data() {
    return {
      drawer: false,
    };
  }
};
</script>

<style scoped>

</style>
<template>
  <div>
    <navigator
      v-model="drawer"
      drawer
    />
    <nav-drawer
      v-model="drawer"
      :title="title"
    >
      <nav-drawer-item>test01</nav-drawer-item>
      <nav-drawer-item>test02</nav-drawer-item>
    </nav-drawer>
    <label>
      title:
      <input
        v-model="title"
        type="text"
      >
    </label>
  </div>
</template>

<script>
import Navigator from '../components/parts/Navigator';
import NavDrawerItem from '../components/parts/NavDrawerItem';
import NavDrawer from '../components/parts/NavDrawer';
export default {
  name: 'NavigatorPage',
  components: {NavDrawer, NavDrawerItem, Navigator},
  data() {
    return {
      drawer: false,
      title: '',
    };
  }
};
</script>

<style scoped>

</style>
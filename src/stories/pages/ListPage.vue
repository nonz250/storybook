<template>
  <div>
    <list :lists="lists">
      <template #default="list">
        {{ list.content.name }}
      </template>
    </list>
  </div>
</template>

<script>
import List from '../components/parts/List';

export default {
  name: 'ListPage',
  components: {List},
  data() {
    return {
      lists: [
        {
          'name': 'test01'
        },
        {
          'name': 'test02'
        },
      ]
    };
  }
};
</script>

<style scoped>

</style>
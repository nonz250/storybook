<template>
  <div>
    <list
      :lists="lists"
      footer
    >
      <template #default="list">
        {{ list.content.name }}
      </template>
      <template #footer>
        <slot name="footer">
          <div
            class="text-center link"
            @click="clickAddList"
          >
            リストを追加
          </div>
        </slot>
      </template>
    </list>
  </div>
</template>

<script>
import List from './List';

export default {
  name: 'AddList',
  components: {List},
  props: {
    lists: {
      type: Array,
      required: true,
    }
  },
  methods: {
    clickAddList() {
      this.$emit('add');
    }
  }
};
</script>

<style scoped>
</style>
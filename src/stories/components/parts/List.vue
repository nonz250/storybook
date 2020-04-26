<template>
  <div class="list">
    <div
      v-if="header"
      class="list-item"
    >
      <slot name="header" />
    </div>
    <div
      v-for="(list, index) in lists"
      :key="index"
      class="list-item"
    >
      <slot :content="list" />
    </div>
    <div
      v-if="footer"
      class="list-item"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    header: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
    lists: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
    .list {
        list-style: none;
        margin: 0;
        border: black solid 1px;
        border-radius: 5px;

        .list-item {
            padding: 0.5rem;
            border-bottom: black solid 1px;

            &:last-child {
                border-bottom: none;
            }
        }
    }
</style>
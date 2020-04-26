<template>
  <div>
    <div class="m-1">
      <list :lists="lists">
        <template #default="list">
          {{ list.content.name }}
        </template>
      </list>
    </div>

    <div class="m-1">
      <list
        :lists="lists"
        header
      >
        <template #header>
          ヘッダー
        </template>
        <template #default="list">
          {{ list.content.name }}
        </template>
      </list>
    </div>

    <div class="m-1">
      <list
        :lists="lists"
        footer
      >
        <template #default="list">
          {{ list.content.name }}
        </template>
        <template #footer>
          フッター
        </template>
      </list>
    </div>

    <div class="m-1">
      <list
        :lists="lists"
        header
        footer
      >
        <template #header>
          ヘッダー
        </template>
        <template #default="list">
          {{ list.content.name }}
        </template>
        <template #footer>
          フッター
        </template>
      </list>
    </div>

    <div class="m-1">
      <add-list
        :lists="listsForAdd"
        @add="addList"
      />
    </div>
  </div>
</template>

<script>
import List from '../components/parts/List';
import AddList from '../components/parts/AddList';

export default {
  name: 'ListPage',
  components: {AddList, List},
  data() {
    return {
      lists: [
        {
          'name': 'test01'
        },
        {
          'name': 'test02'
        },
      ],
      listsForAdd: [
        {
          'name': 'test01'
        },
        {
          'name': 'test02'
        },
      ]

    };
  },
  methods: {
    addList() {
      this.listsForAdd.push({'name': 'add' + Number(this.listsForAdd.length + 1)});
    }
  }
};
</script>

<style scoped>
    @import "../sass/app.scss";
</style>
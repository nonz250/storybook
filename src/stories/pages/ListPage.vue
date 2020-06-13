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
      <list :lists="lists">
        <template #header>
          ヘッダー
        </template>
        <template #header_action>
          <div class="row">
            <div class="col-9 p-0 m-0 text-right">
              <atom-input-text
                v-model="text"
                placeholder="検索"
                panel
              />
            </div>
            <div class="col-3 pl-0 m-0">
              <atom-button outline>
                検索
              </atom-button>
            </div>
          </div>
        </template>
        <template #default="list">
          {{ list.content.name }}
        </template>
      </list>
    </div>

    <div class="m-1">
      <list :lists="lists">
        <template #default="list">
          {{ list.content.name }}
        </template>
        <template #footer>
          フッター
        </template>
      </list>
    </div>

    <div class="m-1">
      <list :lists="lists">
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
import AtomInputText from '../components/atoms/AtomInputText';
import AtomButton from '../components/atoms/AtomButton';

export default {
  name: 'ListPage',
  components: {AtomButton, AtomInputText, AddList, List},
  data() {
    return {
      lists: [
        {
          'name': 'test01'
        },
        {
          'name': 'test02'
        },
        {
          'name': 'test03'
        },
      ],
      listsForAdd: [
        {
          'name': 'test01'
        },
        {
          'name': 'test02'
        },
        {
          'name': 'test03'
        },
      ],
      text: '',
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
<template>
  <div>
    <div class="m-5">
      <panel>
        <template #body>
          ボディー
        </template>
      </panel>
    </div>
    <div class="m-5">
      <panel>
        <template #header>
          ヘッダー
        </template>
        <template #body>
          ボディー
        </template>
      </panel>
    </div>
    <div class="m-5">
      <panel>
        <template #body>
          ボディー
        </template>
        <template #footer>
          フッター
        </template>
      </panel>
    </div>
    <div class="m-5">
      <panel>
        <template #header>
          ヘッダー
        </template>
        <template #body>
          ボディー
        </template>
        <template #footer>
          フッター
        </template>
      </panel>
    </div>
    <div class="m-5">
      <panel>
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
        <template #body>
          ボディー
        </template>
        <template #footer>
          フッター
        </template>
        <template #footer_action>
          <atom-button>Button</atom-button>
        </template>
      </panel>
    </div>
  </div>
</template>

<script>
import Panel from '../components/parts/Panel';
import AtomButton from '../components/atoms/AtomButton';
import AtomInputText from '../components/atoms/AtomInputText';
export default {
  name: 'PanelPage',
  components: {AtomInputText, AtomButton, Panel},
  data() {
    return {
      text: '',
    };
  }
};
</script>

<style lang="scss" scoped>
  @import "../sass/app";
</style>
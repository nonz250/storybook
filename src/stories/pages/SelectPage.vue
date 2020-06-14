<template>
  <div>
    <atom-select
      v-model="select1"
      :options="options1"
    />{{ select1 }}
  </div>
</template>

<script>
import AtomSelect from '../components/atoms/AtomSelect';
export default {
  name: 'SelectPage',
  components: {AtomSelect},
  data(){
    return {
      select1: '',
      options1: [
        {
          name: '選択肢1',
          value: 'a'
        },
        {
          name: '選択肢2',
          value: '2'
        }
      ],
    };
  }
};
</script>

<style>
</style>

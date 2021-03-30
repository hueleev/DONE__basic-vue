<template>
  <div>
    <h1>Kossie Coder</h1>
    <input-field v-model="name"/>      <!-- :name="name" @update-name="name = $event.target.value" -->
    <hr>
    <button @click="updateName">Submit</button>
    {{ name }}
  </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
  components: { InputField },
  data() {
    return {
      name: 'Kossie Coder'
    }
  },
  beforeCreate() {
    /* data 접근 전 */
    console.log('beforeCreate', this.name);
  },
  created() {
     /* 서버 요청 후, data에 response 넣어줄 때 주로 사용 */
    console.log('created', this.name);
  },
  beforeMount() {
    /* html 채워지기 전 */
    console.log('beforeMount');
  },
  mounted() {
    /* html 채워진 후, 화면 접근 가능 그리고 마지막에 화면에 뿌려줌*/
    console.log('mounted');
  },
  beforeUpdate() {
    /* data 변경 전 */
    alert('beforeUpdate');
  },
  updated() {
    /* data 변경 후 마지막에 화면에 뿌려줌*/
    alert('updated');
  },
  beforeDestroy() {
    alert('beforeDestroy');
  },
  destroyed() {
    alert('destroyed');
  },
  methods: {
    updateName() {
      this.name = 'hello';
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>

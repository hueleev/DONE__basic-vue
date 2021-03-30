<template>
  <div>
    <h1>Kossie Coder</h1>
    <KossieCoder :title="title" :name="name"/>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder
  },
  data() {
    return {
      title: 'home title',
      name: 'Kossie Coder'
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>

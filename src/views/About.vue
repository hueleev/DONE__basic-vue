<template>
  <div class="about">
    <KossieCoder>
      <!-- slot 내용 -->
      <template #header="{ kossie }">
        <p>headerSlot# - {{ kossie }} </p>
      </template>
      <template v-slot:default>
        <p>defaultSlot</p>
      </template>
    </KossieCoder>
  </div>
</template>

<script>
import KossieCoder from '@/components/KossieCoder.vue';

export default {
  components: {
    KossieCoder
  }  
}
</script>

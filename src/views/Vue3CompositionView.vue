<script>
import { ref } from 'vue';

export default {
  setup() {
    const capacity = ref(3);

    return { capacity };
  },
};
</script>

<template>
  <div>Capacity Composition API: {{ capacity }}</div>
</template>

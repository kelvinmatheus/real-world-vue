<script>
import { ref } from 'vue';

export default {
  setup() {
    const capacity = ref(3);

    function increaseCapacity() {
      capacity.value += 1;
    }

    return { capacity, increaseCapacity };
  },
};
</script>

<template>
  <div>Capacity Composition API: {{ capacity }}</div>
  <button @click="increaseCapacity">Increase Capacity</button>
</template>

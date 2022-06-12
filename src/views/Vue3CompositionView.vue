<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const capacity = ref(3);
    const attending = ref(['Tim', 'Bob', 'Joe']);

    const spacesLeft = computed(() => capacity.value - attending.value.length);

    function increaseCapacity() {
      capacity.value += 1;
    }

    return {
      capacity,
      attending,
      increaseCapacity,
      spacesLeft,
    };
  },
};
</script>

<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
  </div>
  <button @click="increaseCapacity">Increase Capacity</button>

  <h2>Attending</h2>
  <ul>
    <li v-for="(name, index) in attending" :key="index">
      {{ name }}
    </li>
  </ul>
</template>

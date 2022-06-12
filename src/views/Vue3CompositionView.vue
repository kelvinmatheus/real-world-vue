<script>
import useEventSpace from '@/composables/useEventSpace';
import useMapping from '@/composables/useMapping';

export default {
  setup() {
    const {
      capacity, attending, spacesLeft, increaseCapacity,
    } = useEventSpace();

    const { map, embedId } = useMapping();

    return {
      capacity,
      attending,
      spacesLeft,
      increaseCapacity,
      map,
      embedId,
    };
  },
};
</script>

<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <p>Map: {{ map }} - Embed ID {{ embedId }}</p>
  </div>
  <button @click="increaseCapacity">Increase Capacity</button>

  <h2>Attending</h2>
  <ul>
    <li v-for="(name, index) in attending" :key="index">
      {{ name }}
    </li>
  </ul>
</template>

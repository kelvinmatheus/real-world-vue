<script>
import { reactive, computed, toRefs } from 'vue';

export default {
  setup() {
    const event = reactive({
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
      spacesLeft: computed(() => event.capacity - event.attending.length),
    });

    function increaseCapacity() {
      event.capacity += 1;
    }

    // toRefs This method converts a reactive object to a plain object,
    // where each property is a Reactive Reference pointing to the property on the original object.
    return {
      ...toRefs(event),
      increaseCapacity,

    };
  },
};
</script>

<template>
  <div>
    <p>Vue 3 Composition API - Reactive</p>
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

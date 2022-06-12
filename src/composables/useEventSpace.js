import { ref, computed } from 'vue';

export default function useEventSpace() {
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
}

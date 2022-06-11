<script>
export default {
  data() {
    return {
      capacity: 3,
    };
  },

  methods: {
    increaseCapacity() {
      this.capacity += 1;
    },
  },
};
</script>

<template>
  <div>Capacity: {{ capacity }}</div>
  <button @click="increaseCapacity">Increase Capacity</button>
</template>

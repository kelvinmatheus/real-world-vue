<script>
export default {
  data() {
    return {
      capacity: 3,
      attending: ['Tim', 'Bob', 'Joe'],
    };
  },

  computed: {
    spacesLeft() {
      return this.capacity - this.attending.length;
    },
  },

  methods: {
    increaseCapacity() {
      this.capacity += 1;
    },
  },
};
</script>

<template>
  <div>
    <p>Vue 2</p>
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

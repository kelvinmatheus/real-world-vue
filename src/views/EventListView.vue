<template>
  <h1> Vuex - Events Count: {{ $store.getters.numberOfEvents }} Events for Good</h1>
  <div className="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventListView',
  components: {
    EventCard,
  },

  created() {
    this.$store.dispatch('fetchEvents')
      .catch((error) => {
        this.$router.push({
          name: 'ErrorDisplayView',
          params: { error },
        });
      });
  },

  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

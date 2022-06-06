<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div className="events">
    <EventCard
      v-for="event in eventStore.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue';
import { useEventStore } from '../stores/EventStore';

export default {
  name: 'EventListView',
  components: {
    EventCard,
  },

  setup() {
    const eventStore = useEventStore();

    return {
      eventStore,
    };
  },

  created() {
    this.eventStore.fetchEvents()
      .catch((error) => {
        this.$router.push({
          name: 'ErrorDisplayView',
          params: error,
        });
      });
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

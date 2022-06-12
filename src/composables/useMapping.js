import { ref } from 'vue';

export default function useMapping() {
  const map = ref(10);
  const embedId = ref(4040);

  function increaseMapping() {
    map.value += 1;
  }

  function getEmbedId() {
    return embedId;
  }

  return {
    map,
    embedId,
    increaseMapping,
    getEmbedId,
  };
}

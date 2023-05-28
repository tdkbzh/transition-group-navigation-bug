import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
  const search = ref("");
  const history = ref([
    {
      id: 1,
      text: "John Wick",
    },
    {
      id: 2,
      text: "The Matrix",
    },
  ]);

  return {
    search,
    history,
  };
});

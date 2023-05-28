<template>
  <div class="dualPanelContainer">
    <div class="leftPanel">
      <RouterLink to="/search">Home</RouterLink>

      <h2>SearchView</h2>

      <div>
        <form @submit.prevent="handleSearch">
          <input
            type="text"
            v-model="search"
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <hr />

      <h4>Search history</h4>
      <TransitionGroup name="list">
        <p
          v-for="search in mainStore.history"
          :key="search.id"
          class="searchResult"
        >
          {{ search.text }}
        </p>
      </TransitionGroup>
    </div>
    <div class="rightPanel">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.dualPanelContainer {
  display: flex;
  flex-direction: row;
}

hr {
  margin: 20px 0;
}

.leftPanel {
  width: 200px;
}

h4 {
  font-size: 18px;
  margin-bottom: 8px;
}

.searchResult {
  padding: 4px;
  margin-bottom: 4px;
  background-color: antiquewhite;
}

.rightPanel {
  width: 400px;
  margin-left: 20px;
}
</style>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/stores/main";

import "@/assets/list-animation.css";

const router = useRouter();
const mainStore = useMainStore();

const search = computed({
  get: () => mainStore.search,
  set: (value) => (mainStore.search = value),
});

const handleSearch = () => {
  if (search.value) {
    router.push({ path: "/search/results", query: { search: search.value } });
  }
};
</script>

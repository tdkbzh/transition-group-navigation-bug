<template>
  <div class="resultsView">
    <h2>ResultsView</h2>
    <ul>
      <li>Result One</li>
      <li>Result Two</li>
      <li>Result Three</li>
    </ul>
    <br />
    <p>
      ⬅️
      <strong>
        Launch another search from this page. This time, the TransitionGroup
        animates the already present results - pushing them down smoothly.
      </strong>
    </p>
    <br />
    <p>
      (Go back to <RouterLink to="/">Homepage</RouterLink>, and then, refresh
      the page to reset the history)
    </p>
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "@/stores/main";

const router = useRouter();
const mainStore = useMainStore();

async function storeSearchInHistory() {
  const query = router.currentRoute.value.query?.search?.trim();

  // on page change to another page, the URL query is empty (new URL)
  // but the page is still displayed (animation)
  if (!query) {
    return;
  }

  // get full url from router
  const url = router.currentRoute.value.fullPath;

  // save search to history
  mainStore.history.unshift({
    text: query,
    id: Date.now(),
  });
}

onMounted(async () => {
  const search = router.currentRoute.value.query.search.trim();

  if (!search) {
    await router.push({
      path: "/search",
    });
  } else {
    await storeSearchInHistory();
  }
});

watch(
  () => router.currentRoute.value.query.search,
  async () => {
    await storeSearchInHistory();
  }
);
</script>

import { ref, watchEffect, toValue } from "vue";

export function useFetch(url: string) {
  const data = ref<any>(null);
  const error = ref(null);
  const loading = ref(false); // New loading state

  const fetchData = (fetchUrl: string) => {
    // Reset state before fetching
    data.value = null;
    error.value = null;
    loading.value = true; // Set loading to true before fetching

    fetch(toValue(fetchUrl))
      .then((res) => res.json())
      .then((json) => {
        data.value = json;
        loading.value = false; // Set loading to false after fetching
      })
      .catch((err) => {
        error.value = err;
        loading.value = false; // Set loading to false in case of error
      });
  };

  const refetch = (newUrl?: string) => {
    const targetUrl: string = newUrl || url;
    fetchData(targetUrl);
  };

  watchEffect(() => {
    fetchData(url);
  });

  return { data, error, loading, refetch };
}

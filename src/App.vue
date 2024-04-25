<template>
  <div>
    <div class="mx-auto py-4 container">
      <div class="flex space-x-4 align-middle px-4">
        <router-link to="/"
          ><img :src="require('@/assets/logo.png')" alt="Logo" class="w-48" />
        </router-link>
        <input
          autocomplete="off"
          type="search"
          id="default-search"
          class="block bg-emerald-950 p-2 rounded-md w-full font-normal font-sans text-gray-100 text-md outline-none ps-6 placeholder-gray-400 transition ease-in duration-400 hover:bg-emerald-900"
          placeholder="Search for TV Shows..."
          required
          @input="handleSearchInput"
        />
      </div>
    </div>

    <RouterView v-slot="{ Component }">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";

const router = useRouter();
const route = useRoute();

const handleSearchInput = (event) => {
  const searchQuery = event.target.value.trim();
  const currentPath = route.path;

  if (searchQuery) {
    router.push({ path: "/search", query: { q: searchQuery } });
  } else if (currentPath === "/search") {
    router.push("/");
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 400ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>

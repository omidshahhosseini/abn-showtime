<template>
  <div class="flex justify-center mx-auto h-screen container sm:mt-0 md:mt-8">
    <div v-if="loading">Loading...</div>

    <div v-else class="flex md:flex-row flex-col md:space-x-4 w-full">
      <div
        class="relative bg-cover bg-no-repeat md:w-96 h-[400px] md:h-[575px] shrink-0 rounded-md"
        :style="{
          backgroundImage: `url('${
            tvShow?.image?.medium || require('@/assets/placeholder.png')
          }')`,
        }"
      >
        <div
          class="absolute inset-0 md:hidden bg-gradient-to-t from-black/95 via-black/5 to-black/0 shadow-[0_22px_50px_black]"
        ></div>
      </div>
      <div class="relative space-y-4 md:mt-0 px-4 text-left pb-10">
        <a
          :href="`https://www.imdb.com/title/${tvShow.externals.imdb}`"
          target="_blank"
        >
          <div
            class="font-semibold text-left text-white inline-flex bg-emerald-900 py-1 px-2 rounded-md items-center gap-2 cursor-pointer hover:opacity-75"
          >
            Explore on
            <img :src="require('@/assets/imdb.svg')" class="w-10" />
          </div>
        </a>
        <h1 class="font-semibold text-5xl text-left text-white">
          {{ tvShow.name }}
        </h1>
        <div>
          <Text
            v-if="tvShow.premiered || tvShow.ended"
            class="text-white font-semibold mb-1"
            >{{ yearRange(tvShow.premiered, tvShow.ended) }}
          </Text>
          <div class="flex flex-row space-x-3">
            <Badge v-if="tvShow.rating.average" :text="tvShow.rating.average" />
            <div
              v-if="tvShow.genres"
              class="font-semibold text-left text-white"
            >
              {{ tvShow.genres?.join(", ") }}
            </div>
          </div>
        </div>
        <div v-if="tvShow.language" class="flex flex-row space-x-3">
          <div class="font-semibold text-left text-white">Language:</div>
          <div class="font-semibold text-left text-white">
            {{ tvShow.language }}
          </div>
        </div>
        <div
          v-if="tvShow?.network?.country?.name"
          class="flex flex-row space-x-3"
        >
          <div class="font-semibold text-left text-white">Country:</div>
          <div class="font-semibold text-left text-white">
            {{ tvShow.network.country.name }}
          </div>
        </div>
        <div class="flex flex-row space-x-3">
          <div class="font-semibold text-left text-white">Schedule:</div>
          <div class="font-semibold text-left text-white">
            {{ scheduleText(tvShow?.schedule) }}
          </div>
        </div>
        <div class="mt-4">
          <h4 class="font-semibold text-left text-white text-xl">Story</h4>
          <div
            class="text-left text-white"
            v-html="sanitize(tvShow?.summary)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetTvShow } from "@/services/tvShow/useGetTvShow";
import { sanitize } from "@/utils/sanitize";
import { useRoute } from "vue-router";
import Badge from "../components/base/Badge";
import Text from "../components/base/Text";

const route = useRoute();
const id = route.params.id as string;

const { data: tvShow, error, loading } = useGetTvShow(id);

const scheduleText = (schedule) => {
  const daysText =
    schedule.days.length > 1 ? schedule.days.join(", ") : schedule.days[0];
  return `Every ${daysText} at ${schedule.time}`;
};

const yearRange = (premiered, ended) => {
  const startYear = premiered?.slice(0, 4);
  const endYear = ended?.slice(0, 4);
  return `${startYear}-${endYear}`;
};
</script>

<style scoped></style>

<template>
  <div class="w-full rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg">
    <img
      :src="`https://picsum.photos/1000/420?x=${project.id}`"
      :alt="project.name"
      class="rounded-xl"
    />
    <div class="p-4 text-left">
      <a :href="project.url" class="font-semibold text-xl hover:underline">
        {{ project.name }}
      </a>
      <hr class="m-4" />
      <p class="italic text-gray-500">{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Project } from "@/models";
import { Prop } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    project: {
      type: Object as Prop<Project>,
      required: true,
    },
  },
})
export default class ProjectOverview extends Vue {
  project!: Project;
}
</script>

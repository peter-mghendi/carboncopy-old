<template>
  <div class="hello">
    <a :href="project.url">{{ project.name }}</a>
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

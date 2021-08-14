<template>
  <div class="projects">
    <h1 class="text-4xl font-semibold mb-8">Project Showcase</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ProjectOverview
        v-for="project in projects"
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProjectOverview from "@/components/ProjectOverview.vue";
import { Project } from "@/models";
import { GitHubProjectRepository, Repository } from "@/repositories";

// TODO: Change this to use a different data source.
const repository: Repository<Project> = new GitHubProjectRepository();

@Options({
  components: {
    ProjectOverview,
  },
})
export default class Home extends Vue {
  projects: Project[] = [];

  async created(): Promise<void> {
    this.projects = await repository.getAllAsync();
  }
}
</script>

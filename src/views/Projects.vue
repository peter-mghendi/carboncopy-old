<template>
  <div class="projects">
    <h1>This is the projects page</h1>
    <div>
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

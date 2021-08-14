<template>
  <div class="posts">
    <h1 class="text-4xl font-semibold mb-8">Blog Posts</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <PostOverview v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostOverview from "@/components/PostOverview.vue";
import { Post } from "@/models";
import { DevToPostRepository, Repository } from "@/repositories";

// TODO: Change this to use a different data source.
const repository: Repository<Post> = new DevToPostRepository();

@Options({
  components: {
    PostOverview,
  },
})
export default class Home extends Vue {
  posts: Post[] = [];

  async created(): Promise<void> {
    this.posts = await repository.getAllAsync();
  }
}
</script>

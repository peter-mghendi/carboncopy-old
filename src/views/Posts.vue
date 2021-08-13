<template>
  <div class="posts">
    <h1>This is the posts page</h1>
    <div>
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

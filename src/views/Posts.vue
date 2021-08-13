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

@Options({
  components: {
    PostOverview,
  },
})
export default class Home extends Vue {
  posts: Post[] = [];
}
</script>

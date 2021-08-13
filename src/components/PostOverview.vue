<template>
  <div class="hello">
    <a :href="post.url">{{ post.title }}</a>
  </div>
</template>

<script lang="ts">
import { Post } from "@/models";
import { Prop } from "@vue/runtime-core";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    post: {
      type: Object as Prop<Post>,
      required: true,
    },
  },
})
export default class PostOverview extends Vue {
  post!: Post;
}
</script>

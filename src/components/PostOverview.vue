<template>
  <div class="w-full rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg">
    <img :src="post.image" :alt="post.title" class="rounded-xl" />
    <div class="p-4 text-left">
      <p class="text-sm text-gray-500">
        {{ post.published.toLocaleDateString() }}
      </p>
      <a :href="post.url" class="font-semibold text-xl hover:underline">
        {{ post.title }}
      </a>
      <hr class="m-4" />
      <p class="italic text-gray-500">{{ post.description }}</p>
    </div>
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

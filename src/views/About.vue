<template>
  <div class="about">
    <h1 class="text-4xl font-semibold mb-8">About Me</h1>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-4 mb-4">
      <SocialBadge :href="config.social.devto" :icon="devtoIcon" title="Dev.To" />
      <SocialBadge :href="config.social.github" :icon="githubIcon" title="GitHub" />
      <SocialBadge :href="config.social.linkedin" :icon="linkedinIcon" title="LinkedIn" />
      <SocialBadge :href="config.social.twitter" :icon="twitterIcon" title="Twitter" />
    </div>
    <div
      class="prose prose-indigo text-gray-900 dark:text-gray-50 mx-auto w-full md:w-4/5 lg:w-3/4"
      v-html="config.bio"
    ></div>
  </div>
</template>

<script lang="ts">
import DOMPurify from "dompurify";
import marked from "marked";
import SocialBadge from "@/components/SocialBadge.vue";
import { faDev, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { siteOptions as options } from "@/config";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    SocialBadge
  }
})
export default class About extends Vue {
  config = options;

  devtoIcon = faDev;
  githubIcon = faGithub;
  linkedinIcon = faLinkedinIn;
  twitterIcon = faTwitter;

  created() {
    this.config.bio = DOMPurify.sanitize(marked(this.config.bio));
  }
}
</script>

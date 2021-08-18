<template>
    <a :href="href" class="p-2 rounded-full bg-gray-50 dark:bg-gray-800 hover:shadow-lg">
        <FontAwesomeIcon :icon="icon" class="mr-2" /> {{ title }}
    </a>
</template>

<script lang="ts">
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Prop } from '@vue/runtime-core';
import { Options, Vue } from "vue-class-component";

@Options({   
  components: {
    FontAwesomeIcon
  },
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
        type: Object as Prop<IconDefinition>,
        required: true
    }
  },
})
export default class SocialBadge extends Vue {
  href!: string;
  title!: string;
  icon!: IconDefinition;
}
</script>
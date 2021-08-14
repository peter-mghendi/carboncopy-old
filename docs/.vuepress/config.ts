import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Carbon Copy',
    description: 'A carbon copy of you.',

    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/sixpeteunder/carboncopy',
        docsDir: 'docs',

    },
})
<template lang="pug">
main.home
  home-base.section
  home-detail.section
  home-article.section
</template>

<script lang="js">
import HomeBase from '@/components/HomeBase.vue'
import HomeDetail from '@/components/HomeDetail.vue'
import HomeArticle from '@/components/HomeArticle.vue'

export default {
  components: {
    HomeBase,
    HomeDetail,
    HomeArticle,
  }
}
</script>

<style lang="scss" scoped>
.home {
  > .section {
    min-height: 100vh;
    text-align: center;

    &:not(:last-child) {
      border-bottom: var(--bold-border-width) var(--theme-color1) solid;
    }
  }
}
</style>

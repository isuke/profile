<template lang="pug">
section#detail.home-detail(ref="self", :style="style")
  h1.title Detail

  dl.contents
    dt.term Mind
    dd.description Just for Fun.

    dt.term Language
    dd.description Japanese

    dt.term Skills
    dd.description
      ul.list
        li.item Ruby
        li.item Rails
        li.item javascript
        li.item CoffeeScript
        li.item vue.js
        li.item css

    dt.term Licenses
    dd.description
      ul.list
        li.item 応用情報技術者
        li.item データベーススペシャリスト

    dt.term Brief History
    dd.description
      p.text 2012/04にIT企業へ就職。
      p.text 2014/07〜2018/09まで複数のITベンチャー企業に就労。

</template>

<script lang="js">
import styleSettable from '@/scripts/mixins/styleSettable'

export default {
  mixins: [styleSettable],
}
</script>

<style lang="scss" scoped>
.home-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--night-bg-color1);
  color: var(--night-ft-color1);

  padding: var(--space-size-xxl) var(--space-size-m);

  > .title {
    font-size: var(--ft-size-xxl);
    font-weight: var(--bold-font-weight);

    margin-bottom: var(--space-size-xxl);
  }

  > .contents {
    > .term {
      font-size: var(--ft-size-l);
      margin-bottom: var(--space-size-m);

      &::before {
        content: '- ';
      }
      &::after {
        content: ' -';
      }
    }
    > .description {
      font-size: var(--ft-size-m);
      &:not(:last-child) {
        margin-bottom: var(--space-size-xl);
      }
    }
  }
}
</style>

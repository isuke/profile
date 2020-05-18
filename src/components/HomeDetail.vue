<template lang="pug">
section.home-detail
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

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.home-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--day-bg-color1);
  color: var(--day-ft-color1);

  padding: var(--space-size-xxl) var(--space-size-m);

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

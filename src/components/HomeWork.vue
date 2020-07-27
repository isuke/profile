<template lang="pug">
section#work.home-work(ref="self", :style="style")
  h1.title Work

  section.section
    h2.title Vue.jsサポーター

    p.text Vue.jsに関する質問・疑問にマンツーマンでお答えします。
    p.text <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Isuke_0" class="link">Twitter</a>のDMにてお問い合わせください。
    p.text
      | お問い合わせの際は以下の項目を書いていただけるとその後のやり取りがスムーズです。
      ul.list
        li.item 1) 希望開始日時（複数）
        li.item 2) 大まかな質問内容

    dl.detail
      dt.term 方法
      dd.description Zoomによる画面共有

      dt.term 質問数
      dd.description いくつでも

      dt.term 時間
      dd.description 最大2時間

      dt.term 利用可能日時
      dd.description 平日14時〜20時

      dt.term 料金
      dd.description お試し期間に付き無料

    .example
      h2.heading 質問例
      ul.list
        li.item Vue.jsってどうやって使い始めるの？
        li.item ○○を××するようにしたいけど、どうしたらいいかわからない
        li.item なぜか動かない。どうして？

    .attention
      h2.heading ご了承ください
      ul.list
        li.item 答えられない質問もあるかもしれません（特にTypeScript系）。
        li.item 内容や日時によってお断りさせて頂く場合があります。
</template>

<script lang="js">
import styleSettable from '@/scripts/mixins/styleSettable'

export default {
  mixins: [styleSettable],
}
</script>

<style lang="scss" scoped>
.home-work {
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

  > .section {
    > .title {
      font-size: var(--ft-size-xl);

      margin-bottom: var(--space-size-l);
    }

    > .text {
      > .link {
        @include link(var(--night-ft-color1), var(--night-ft-color2));
      }
    }

    > .detail {
      display: grid;
      grid-template-columns: 8rem 13rem;
      justify-content: center;
      grid-column-gap: 1em;

      margin-top: var(--space-size-xl);

      > .term {
        text-align: right;
      }
      > .description {
        text-align: left;
      }
    }

    > .example {
      margin-top: var(--space-size-xl);

      > .heading {
        font-size: var(--ft-size-l);
      }
    }

    > .attention {
      margin-top: var(--space-size-xl);

      > .heading {
        font-size: var(--ft-size-l);

        &::before {
          content: '※';
        }
      }
    }
  }
}
</style>

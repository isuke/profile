<template lang="pug">
section.home-base(ref="self", :style="style")
  transition(name="fade", mode="out-in")
    img.icon(:src="logo1", alt="logo", @click="clickedLogo", v-if="currentLogo === logo1", :key="logo1")
    img.icon(:src="logo2", alt="logo", @click="clickedLogo", v-if="currentLogo === logo2", :key="logo2")
  h2.name
    ruby.string.family
      rt.text 藤山
      rp.parentheses FUJIYAMA
    ruby.string.personal
      rt.text 鋳助
      rp.parentheses Isuke
  ul.accounts
    li.account: a.link(target="_blank", rel="noopener noreferrer", href="https://github.com/isuke") GitHub
    li.account: a.link(target="_blank", rel="noopener noreferrer", href="https://qiita.com/isuke") Qiita
    li.account: a.link(target="_blank", rel="noopener noreferrer", href="https://ja.stackoverflow.com/users/28630/isuke-fujiyama") Stack Overflow JP
    li.account: a.link(target="_blank", rel="noopener noreferrer", href="https://codepen.io/isuke") CodePen
</template>

<script lang="ts">
import styleSettable from '@/scripts/mixins/styleSettable'

import logo1 from '@/assets/logo01.png'
import logo2 from '@/assets/logo02.png'

export default {
  mixins: [styleSettable],

  data: function() {
    return {
      logo1: logo1,
      logo2: logo2,
      currentLogo: logo1,
    }
  },

  methods: {
    clickedLogo() {
      this.currentLogo = this.currentLogo === logo1 ? logo2 : logo1
    },
  },

  created() {
    this.style.opacity = 1
  },
}
</script>

<style lang="scss" scoped>
.home-base {
  --my-logo-size: 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--night-bg-color1);
  color: var(--night-ft-color1);

  padding: var(--space-size-xxl) var(--space-size-m);

  > .icon {
    width: auto;
    height: var(--my-logo-size);
    margin-bottom: var(--space-size-xxl);

    border-radius: var(--border-radius-m);

    cursor: pointer;

    transition: all 0.4s;

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  > .name {
    display: inline-flex;
    margin-bottom: var(--space-size-xxl);

    > .string {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;

      > .text {
        display: inline;
        font-size: var(--ft-size-xxl);
        font-weight: var(--bold-font-weight);
      }
      > .parentheses {
        display: inline;
        font-size: var(--ft-size-m);
      }

      &:not(:last-child) {
        margin-right: 1em;
      }
    }
  }

  > .accounts {
    > .account {
      @include link(var(--night-ft-color1), var(--night-ft-color2));

      &:not(:last-child) {
        margin-bottom: 1.5em;
      }
    }
  }
}
</style>

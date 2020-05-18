<template lang="pug">
section.home-article(ref="self", :style="style")
  h1.title Articles

  table.table
    thead.head
      tr.row
        th.header.date Date
        th.header.title Title
        th.header.like Like
    tbody.body
      tr.row(v-for="article in articles", :key="article.id")
        td.data.date {{ formatDate(article['created_at']) }}
        td.data.title
          a.link(target="_blank", rel="noopener noreferrer", :href="article['url']") {{ article['title'] }}
        td.data.like {{ article['likes_count'] }}
</template>

<script lang="kss">
import axios from 'axios'
import dayjs from 'dayjs'

import styleSettable from '@/scripts/mixins/styleSettable'

import sampleArticles from '@/sample_articles.json'

export default {
  mixins: [styleSettable],

  data: function() {
    return {
      articles: [],
      url: "https://qiita.com/api/v2/users/isuke/items?per_page=100",
    }
  },

  methods: {
    setArticles() {
      if (process.env.NODE_ENV === 'production') {
        axios.get(this.url)
          .then((response) => {
            this.articles = response.data
          })
      } else {
        this.articles = sampleArticles
      }
    },

    formatDate(date) {
      return dayjs(date).format('YYYY/MM/DD')
    },
  },

  created() {
    this.setArticles()
  }
}
</script>

<style lang="scss" scoped>
.home-article {
  background-color: var(--night-bg-color1);
  color: var(--night-ft-color1);

  padding: var(--space-size-xxl) var(--space-size-m);

  > .title {
    font-size: var(--ft-size-xl);
    font-weight: var(--bold-font-weight);

    margin-bottom: var(--space-size-xxl);
  }

  > .table {
    width: 100%;

    > .head {
      > .row {
        background-color: var(--night-bg-color2);
        border-bottom: var(--base-border-width) var(--night-ft-color1) solid;

        > .header {
          padding: 0.5em;
        }
      }
    }
    > .body {
      > .row {
        &:nth-child(even) {
          background-color: var(--night-bg-color2);
        }

        > .data {
          padding: 0.5em;

          &.date {
            text-align: left;
          }
          &.title {
            text-align: left;
            line-height: calc(var(--ft-size-m) * 1.5);
          }
          &.like {
            text-align: right;
          }
        }
      }
    }
  }
}
</style>

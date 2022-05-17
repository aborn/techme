<template>
  <nav>
    <ul class="block lg:flex">
      <li
        v-for="(nav, index) in navLinks"
        :key="index"
        class="pb-6 lg:pb-0 pr-6"
      >
        <nuxt-link :to="nav.url" class="hover:no-underline">
          {{ nav.link }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        navLinks: [
          {
            url: '/resources/guest-live-streams',
            link: '首页'
          },
          {
            url: '/resources/interviews',
            link: '立即投稿'
          },
          {
            url: '/resources/podcasts',
            link: '月刊介绍'
          },
          {
            url: '/blog',
            link: 'Blog'
          }
        ]
      }
    }
  }
</script>

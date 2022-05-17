<template>
  <div class="">
    <TopBar />

    <div class="container mt-top-bar">
      <AppTitle>比心技术月刊</AppTitle>
      <slot />
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "比心技术月刊",
        description:
          "比心技术月刊",
        image: 'https://debbie.codes/twitter-card-blog.png'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.description
          }
        ],
        link: [
          {
            hid: 'canonical',
            rel: 'canonical',
            href: 'https://debbie.codes/blog'
          }
        ]
      }
    }
  }
</script>

<style>
  .dark .prose blockquote {
    color: #fff;
  }
</style>

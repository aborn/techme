<script setup>
const { data: document } = await useAsyncData('home', () => {
  return queryContent('/').findOne()
})
</script>

<template>
<main>
  <h1>{{ document.titile }}</h1>
  <Content>
    {{document}}
  </Content>
</main>
</template>

<script>
definePageMeta({
  layout: "blog",
});
</script>
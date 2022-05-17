<script setup>
const { data: document } = await useAsyncData('home', () => {
  return queryContent('/').findOne()
})
</script>

<template>
<main>
  <Content>
    {{ document }}
  </Content>
</main>
</template>

<script>
definePageMeta({
  layout: "blog",
});
</script>
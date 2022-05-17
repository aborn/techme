<template>

  <blog example="essentials/hello-world" repo="nuxt/content">
    <template #icon>
      Nuxt/content
    </template>
    <Content :key="$route.path" />
  </blog>
  
</template>
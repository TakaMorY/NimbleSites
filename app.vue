<!-- <template>
  <div class="relative overflow-hidden">
    <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
    <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
    <NuxtPage />
  </div>
</template> -->
<template>

  <NuxtLayout>

    <NuxtPage />
    <div>
      <ScrollToTop />
    </div>

  </NuxtLayout>

</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - NimbleSites` : 'NimbleSites'
  }
})
</script>

<style scoped>
/* Убедитесь, что эти стили присутствуют */
html,
body {
  width: 100%;
  overflow-x: hidden;
}
</style>
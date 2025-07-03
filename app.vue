<!-- <template>
  <div class="relative overflow-hidden">
    <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
    <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
    <NuxtPage />
  </div>
</template> -->
<template>
  <NuxtLayout>
    <div class="relative overflow-hidden min-h-screen">

      <div class="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-float-delay"></div>


      <div class="absolute top-1/4 left-10 w-32 h-32 bg-purple-100 rounded-full opacity-15 animate-pulse"></div>
      <div
        class="absolute bottom-1/3 right-16 w-40 h-40 bg-indigo-100 rounded-lg opacity-10 rotate-45 animate-spin-slow">
      </div>


      <div class="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 -z-10"></div>

      <NuxtPage :key="$route.fullPath" class="relative z-10" />
    </div>
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
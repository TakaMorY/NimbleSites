<template>
    <button v-show="isVisible" @click="scrollToTop"
        class="fixed bottom-4 right-4 z-50 bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-105 ease-in-out transform"
        aria-label="Прокрутить наверх">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300

const handleScroll = () => {
    isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
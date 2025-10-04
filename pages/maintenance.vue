<!-- pages/maintenance.vue -->
<template>
    <div
        class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute inset-0">
            <div class="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-800/80"></div>
            <div
                class="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-500/10 rounded-full blur-3xl animate-pulse">
            </div>
            <div
                class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/15 to-purple-700/10 rounded-full blur-3xl animate-pulse delay-1000">
            </div>
        </div>

        <div class="max-w-lg w-full relative z-10">
            <div
                class="bg-gray-800/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-purple-500/20 p-8 transform transition-all duration-700">
                <div class="text-center mb-8">
                    <div
                        class="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-violet-700 shadow-lg mb-6">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                    </div>

                    <h1
                        class="text-4xl font-bold bg-gradient-to-r from-purple-200 to-violet-100 bg-clip-text text-transparent mb-3">
                        Технические работы
                    </h1>
                    <p class="text-purple-200 text-xl font-light">
                        Мы работаем над улучшением сервиса
                    </p>
                </div>

                <div class="flex justify-center mb-8">
                    <div class="relative">
                        <div class="w-28 h-28 rounded-full border-4 border-gray-600/30"></div>
                        <div
                            class="absolute top-0 left-0 w-28 h-28 rounded-full border-4 border-transparent border-t-purple-400 border-r-violet-400 animate-spin-slow">
                        </div>
                        <div
                            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-violet-400 shadow-lg">
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <p class="text-purple-200/70 mb-4">
                        Сайт временно недоступен. Мы проводим плановые технические работы для улучшения вашего опыта.
                    </p>
                    <p class="text-purple-300/50 text-sm">
                        Приносим извинения за временные неудобства
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

const style = `
@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
`


</script>
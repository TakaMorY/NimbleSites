<template>
    <div
        class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <!-- Анимированный фон -->
        <div class="absolute inset-0 overflow-hidden">
            <!-- Градиентные шары -->
            <div class="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div class="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"></div>
            <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl">
            </div>
        </div>

        <!-- Основной контент -->
        <div class="relative z-10 text-center max-w-2xl mx-auto">
            <!-- Заголовок -->
            <div class="mb-12">
                <h1
                    class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
                    Техническое обслуживание
                </h1>
                <p class="text-xl text-purple-200/80 font-light">
                    Мы работаем над улучшением вашего опыта
                </p>
            </div>

            <!-- Улучшенный индикатор загрузки -->
            <div class="flex justify-center items-center space-x-4 mb-12">
                <!-- Пульсирующий контейнер -->
                <div class="relative">
                    <div class="absolute inset-0 animate-ping bg-purple-400/20 rounded-full"></div>
                    <div class="relative flex space-x-3">
                        <div v-for="(ball, index) in balls" :key="index"
                            class="h-12 w-12 bg-gradient-to-br from-white to-purple-100 rounded-full shadow-lg border border-purple-200/20"
                            :style="{
                                animationDelay: `${index * 0.15}s`,
                                transform: `translateY(${ball.y}px)`
                            }"></div>
                    </div>
                </div>
            </div>

            <!-- Информационный блок -->
            <div class="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 mb-8">
                <div class="flex items-center justify-center mb-4">
                    <svg class="w-8 h-8 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p class="text-lg text-white font-medium">Сайт временно недоступен</p>
                </div>
                <p class="text-purple-100/80 leading-relaxed">
                    В настоящее время мы проводим плановые технические работы для улучшения
                    производительности и добавления новых функций. Приносим извинения за временные неудобства.
                </p>
            </div>


        </div>



    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Состояние для прыгающих шариков
const balls = ref([
    { y: 0 },
    { y: 0 },
    { y: 0 }
])

// Прогресс работ
const progress = ref(0)

// Анимация прыгающих шариков
let animationFrame

const animateBalls = () => {
    const time = Date.now() * 0.001
    balls.value.forEach((ball, index) => {
        // Каждый шарик прыгает со своей частотой
        ball.y = Math.sin(time * 2 + index * 0.5) * -15
    })
    animationFrame = requestAnimationFrame(animateBalls)
}

// Имитация прогресса работ
let progressInterval

onMounted(() => {
    // Запуск анимации шариков
    animateBalls()

    // Имитация прогресса
    progressInterval = setInterval(() => {
        if (progress.value < 100) {
            progress.value += 0.5
        } else {
            clearInterval(progressInterval)
        }
    }, 100)
})

onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    if (progressInterval) clearInterval(progressInterval)
})


definePageMeta({
    layout: false
})
</script>

<style scoped>
/* Кастомные анимации для Tailwind */
@keyframes bounce-custom {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-20px);
    }
}

.animate-bounce-custom {
    animation: bounce-custom 1s infinite;
}

/* Улучшенная анимация для шариков */
.ball-animation {
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
</style>
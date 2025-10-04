<template>
    <section class="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <!-- Анимированный фон с плавающими элементами -->
        <div class="floating-shapes">
            <div v-for="i in 8" :key="i" :class="`shape-${i}`"></div>
        </div>

        <!-- Вращающиеся элементы на фоне -->
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-purple-500/20 animate-rotate">
        </div>
        <div
            class="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-2 border-blue-500/20 animate-rotate-reverse">
        </div>

        <!-- Пульсирующие элементы -->
        <div class="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-purple-500/10 animate-pulse-slow"></div>
        <div class="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-blue-500/10 animate-pulse-slow-delay"></div>

        <div class="flex items-center min-h-screen bg-gradient-to-r from-purple-600/20 to-blue-500/20 relative z-10">
            <div class="container mx-auto px-4 py-16">
                <div class="flex flex-col lg:flex-row items-center justify-between">
                    <!-- Левая часть с текстом -->
                    <div class="lg:w-1/2 mb-12 lg:mb-0">
                        <!-- Заголовок с эффектом печатания -->
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            <span class="block text-white typewriter-container"
                                :class="{ 'scroll-trigger-visible': titleVisible }" ref="titleLine1">
                                <span class="typewriter-text">{{ displayedFirstLine }}</span>
                                <span class="typewriter-cursor" :class="{
                                    blinking: isTyping,
                                    hidden: !isTyping && !showFirstLineCursor
                                }">|</span>
                            </span>

                            <span class="block text-white mt-2 typewriter-container"
                                :class="{ 'scroll-trigger-visible': subtitleVisible }" ref="titleLine2">
                                <span class="typewriter-text">{{ displayedSecondLine }}</span>
                                <span class="typewriter-cursor" :class="{
                                    blinking: isSecondLineTyping || showSecondLineCursor,
                                    hidden: !isSecondLineTyping && !showSecondLineCursor
                                }">|</span>
                            </span>
                        </h1>

                        <!-- Текст описания -->
                        <div class="text-lg text-white mt-8 mb-8 max-w-2xl"
                            :class="{ 'scroll-trigger-visible': textVisible }" ref="textBlock">
                            <p class="mb-4">Мы создаем современные веб-сайты, которые не просто красиво выглядят, а
                                эффективно работают на ваш бизнес. Каждый проект - это индивидуальное решение,
                                учитывающее специфику вашей ниши и целевой аудитории.</p>
                            <p>От лаконичных лендингов до сложных интернет-магазинов - мы реализуем проекты любой
                                сложности с гарантией качества и сроков.</p>
                        </div>

                        <!-- Кнопка и дополнительные элементы -->
                        <div :class="{ 'scroll-trigger-visible': buttonVisible }" ref="buttonBlock">
                            <NuxtLink to="https://t.me/TakaMorY" target="_blank"
                                class="inline-flex items-center justify-center px-8 py-4 h-14 min-w-40 text-lg font-semibold text-black bg-[#f9d1f9] rounded-lg hover:bg-indigo-50 transition-all duration-300 border-2 border-transparent hover:border-indigo-100 hover-glow group glow">
                                Заказать сайт
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </NuxtLink>

                            <div class="mt-6 flex flex-wrap gap-4">
                                <div class="flex items-center text-white text-sm">
                                    <i class="fas fa-check-circle text-[#f9d1f9] mr-2"></i>
                                    <span>Современный дизайн</span>
                                </div>
                                <div class="flex items-center text-white text-sm">
                                    <i class="fas fa-check-circle text-[#f9d1f9] mr-2"></i>
                                    <span>Адаптивная верстка</span>
                                </div>
                                <div class="flex items-center text-white text-sm">
                                    <i class="fas fa-check-circle text-[#f9d1f9] mr-2"></i>
                                    <span>SEO-оптимизация</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Правая часть с изображением -->
                    <div class="lg:w-1/2 flex justify-center">
                        <div class="relative">
                            <div
                                class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-lg opacity-30 animate-pulse-slow">
                            </div>
                            <img id="heroImg1"
                                class="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl rounded-lg shadow-2xl relative z-10 hover-glow transition-all duration-500"
                                :class="{ 'scroll-trigger-visible': imageVisible }" ref="heroImage"
                                src="/images/logo/logo.png" alt="Пример рекламного сайта" width="500" height="400"
                                loading="lazy" />

                            <!-- Элементы вокруг изображения -->
                            <div class="absolute -top-4 -right-4 w-8 h-8 bg-[#f9d1f9] rounded-full animate-float"></div>
                            <div
                                class="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-float-delay">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Реактивные переменные для отслеживания видимости элементов
const titleVisible = ref(false)
const subtitleVisible = ref(false)
const textVisible = ref(false)
const buttonVisible = ref(false)
const imageVisible = ref(false)

// Переменные для эффекта печатания текста
const firstLine = 'РАЗРАБОТКА САЙТА'
const secondLine = 'ПОД ЗАКАЗ'
const displayedFirstLine = ref('')
const displayedSecondLine = ref('')
const isTyping = ref(false)
const isSecondLineTyping = ref(false)
const showFirstLineCursor = ref(false)
const showSecondLineCursor = ref(false)

// Ссылки на DOM элементы
const titleLine1 = ref(null)
const titleLine2 = ref(null)
const textBlock = ref(null)
const buttonBlock = ref(null)
const heroImage = ref(null)

// Таймеры для очистки
let typingTimer1 = null
let typingTimer2 = null
let observer = null

// Функция для эффекта печатания текста
const typeWriter = (text, displayRef, speed = 100, callback = null) => {
    let i = 0
    displayRef.value = ''

    const timer = setInterval(() => {
        if (i < text.length) {
            displayRef.value += text.charAt(i)
            i++
        } else {
            clearInterval(timer)
            if (callback) callback()
        }
    }, speed)

    return timer
}

// Инициализация Intersection Observer
const initIntersectionObserver = () => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target

                if (element === titleLine1.value && !titleVisible.value) {
                    titleVisible.value = true
                    // Запускаем анимацию печатания для первой строки
                    isTyping.value = true
                    showFirstLineCursor.value = true
                    typingTimer1 = typeWriter(firstLine, displayedFirstLine, 100, () => {
                        isTyping.value = false
                        // Скрываем курсор первой строки после завершения печати
                        setTimeout(() => {
                            showFirstLineCursor.value = false
                        }, 500)

                        // После завершения первой строки запускаем вторую
                        if (titleLine2.value && !subtitleVisible.value) {
                            subtitleVisible.value = true
                            isSecondLineTyping.value = true
                            showSecondLineCursor.value = true
                            typingTimer2 = typeWriter(secondLine, displayedSecondLine, 100, () => {
                                isSecondLineTyping.value = false
                                // Оставляем курсор второй строки мигающим
                                showSecondLineCursor.value = true
                            })
                        }
                    })
                }

                if (element === textBlock.value && !textVisible.value) {
                    textVisible.value = true
                }

                if (element === buttonBlock.value && !buttonVisible.value) {
                    buttonVisible.value = true
                }

                if (element === heroImage.value && !imageVisible.value) {
                    imageVisible.value = true
                }
            }
        })
    }, {
        threshold: 0.3, // Элемент считается видимым, когда 30% его площади в зоне видимости
        rootMargin: '0px 0px -50px 0px' // Небольшой отступ снизу для более плавного появления
    })

    // Наблюдаем за элементами
    if (titleLine1.value) observer.observe(titleLine1.value)
    if (titleLine2.value) observer.observe(titleLine2.value)
    if (textBlock.value) observer.observe(textBlock.value)
    if (buttonBlock.value) observer.observe(buttonBlock.value)
    if (heroImage.value) observer.observe(heroImage.value)
}

// Устанавливаем обработчики событий при монтировании компонента
onMounted(() => {
    // Инициализируем Intersection Observer после монтирования
    setTimeout(initIntersectionObserver, 100)
})

// Убираем обработчики при размонтировании компонента
onUnmounted(() => {
    // Очищаем таймеры
    if (typingTimer1) clearInterval(typingTimer1)
    if (typingTimer2) clearInterval(typingTimer2)

    // Отключаем observer
    if (observer) {
        observer.disconnect()
    }
})
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        transform: translateY(50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes typewriter {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

@keyframes fadeInScale {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
    animation: float 6s ease-in-out infinite;
    animation-delay: 2s;
}

.animate-rotate {
    animation: rotate 20s linear infinite;
}

.animate-rotate-reverse {
    animation: rotate 20s linear infinite reverse;
}

.animate-pulse-slow {
    animation: pulse 4s ease-in-out infinite;
}

.animate-pulse-slow-delay {
    animation: pulse 4s ease-in-out infinite;
    animation-delay: 2s;
}

.scroll-trigger-visible {
    animation: fadeInUp 0.8s ease-out forwards;
}

.floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}

.floating-shapes div {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 15s infinite linear;
}

.shape-1 {
    width: 80px;
    height: 80px;
    top: 20%;
    left: 10%;
    animation-duration: 20s;
}

.shape-2 {
    width: 120px;
    height: 120px;
    top: 60%;
    left: 80%;
    animation-duration: 25s;
    animation-delay: 2s;
}

.shape-3 {
    width: 60px;
    height: 60px;
    top: 80%;
    left: 20%;
    animation-duration: 15s;
    animation-delay: 1s;
}

.shape-4 {
    width: 100px;
    height: 100px;
    top: 40%;
    left: 60%;
    animation-duration: 30s;
    animation-delay: 3s;
}

.shape-5 {
    width: 70px;
    height: 70px;
    top: 10%;
    left: 70%;
    animation-duration: 18s;
    animation-delay: 4s;
}

.shape-6 {
    width: 90px;
    height: 90px;
    top: 70%;
    left: 30%;
    animation-duration: 22s;
    animation-delay: 1.5s;
}

.shape-7 {
    width: 50px;
    height: 50px;
    top: 30%;
    left: 90%;
    animation-duration: 16s;
    animation-delay: 2.5s;
}

.shape-8 {
    width: 110px;
    height: 110px;
    top: 50%;
    left: 5%;
    animation-duration: 28s;
    animation-delay: 3.5s;
}

/* Стили для эффекта печатающегося текста */
.typewriter-container {
    position: relative;
    display: inline-block;
    overflow: hidden;
}

.typewriter-text {
    color: inherit;
    white-space: nowrap;
}

.typewriter-cursor {
    display: inline-block;
    margin-left: 2px;
    color: #f9d1f9;
    font-weight: normal;
}

.typewriter-cursor.hidden {
    display: none;
}

.typewriter-cursor.blinking {
    animation: blink 1s infinite;
}

.glow {
    box-shadow: 0 0 20px rgba(249, 209, 249, 0.7);
}

.hover-glow:hover {
    box-shadow: 0 0 30px rgba(249, 209, 249, 0.9);
    transform: translateY(-5px) scale(1.02);
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
    .floating-shapes div {
        display: none;
        /* Скрываем плавающие элементы на мобильных для улучшения производительности */
    }

    .animate-rotate,
    .animate-rotate-reverse {
        animation-duration: 30s;
        /* Замедляем вращение на мобильных */
    }
}

/* Улучшенная анимация появления для разных элементов */
.scroll-trigger-visible.delay-1 {
    animation-delay: 0.1s;
}

.scroll-trigger-visible.delay-2 {
    animation-delay: 0.2s;
}

.scroll-trigger-visible.delay-3 {
    animation-delay: 0.3s;
}

.scroll-trigger-visible.delay-4 {
    animation-delay: 0.4s;
}

.scroll-trigger-visible.delay-5 {
    animation-delay: 0.5s;
}

/* Дополнительные анимации появления */
.fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
}

.slide-in-left {
    animation: slideInLeft 0.8s ease-out forwards;
}

.slide-in-right {
    animation: slideInRight 0.8s ease-out forwards;
}

/* Анимации для конкретных элементов при появлении */
.text-block-animation {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
}

.text-block-visible {
    opacity: 1;
    transform: translateY(0);
}

.button-animation {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.6s ease-out;
}

.button-visible {
    opacity: 1;
    transform: scale(1);
}

.image-animation {
    opacity: 0;
    transform: translateX(30px) rotate(5deg);
    transition: all 0.8s ease-out;
}

.image-visible {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
}
</style>

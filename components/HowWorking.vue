    <template>
        <section class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950 to-gray-900">
            <!-- Анимированный фон -->
            <div class="absolute inset-0">
                <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/5 rounded-full blur-3xl animate-float">
                </div>
                <div
                    class="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-700/5 rounded-full blur-3xl animate-float-delayed">
                </div>
            </div>

            <div class="relative z-10 container mx-auto px-4">
                <!-- Заголовок с анимацией -->
                <div class="text-center mb-20">
                    <div
                        class="inline-flex items-center justify-center w-20 h-20 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-600/30 mb-6 animate-pulse-slow">
                        <svg class="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2
                        class="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                        Как мы создаём
                    </h2>
                    <p class="text-xl text-purple-200/80 max-w-3xl mx-auto">
                        Процесс, превращающий идеи в цифровые шедевры
                    </p>
                </div>

                <!-- Интерактивные карточки -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <!-- Левая колонка -->
                    <div class="space-y-8">
                        <!-- Шаг 1 -->
                        <div class="group relative" @mouseenter="setActiveStep(0)">
                            <div
                                class="absolute -inset-3 bg-purple-600/10 rounded-3xl blur-xl group-hover:bg-purple-600/20 transition-all duration-500">
                            </div>
                            <div
                                class="relative bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-500">
                                <div class="flex items-start space-x-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                            01
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-3">Погружение</h3>
                                        <p class="text-purple-200/90 leading-relaxed">
                                            Глубоко изучаем ваш бизнес, анализируем конкурентов и создаём детальную
                                            карту проекта
                                        </p>
                                        <ul class="mt-4 space-y-2">
                                            <li class="flex items-center text-purple-300 text-sm">
                                                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                                Глубинное интервью
                                            </li>
                                            <li class="flex items-center text-purple-300 text-sm">
                                                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                                Анализ рынка
                                            </li>
                                            <li class="flex items-center text-purple-300 text-sm">
                                                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                                Прототипирование
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Шаг 3 -->
                        <div class="group relative" @mouseenter="setActiveStep(2)">
                            <div
                                class="absolute -inset-3 bg-purple-600/10 rounded-3xl blur-xl group-hover:bg-purple-600/20 transition-all duration-500">
                            </div>
                            <div
                                class="relative bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-500">
                                <div class="flex items-start space-x-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                            03
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-3">Разработка</h3>
                                        <p class="text-purple-200/90 leading-relaxed">
                                            Создаём чистый код на современных технологиях с фокусом на
                                            производительность
                                        </p>
                                        <div class="mt-4 flex flex-wrap gap-2">
                                            <span
                                                class="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Vue.js</span>
                                            <span
                                                class="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Nuxt
                                                3</span>
                                            <span
                                                class="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Tailwind</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Правая колонка -->
                    <div class="space-y-8">
                        <!-- Шаг 2 -->
                        <div class="group relative" @mouseenter="setActiveStep(1)">
                            <div
                                class="absolute -inset-3 bg-purple-600/10 rounded-3xl blur-xl group-hover:bg-purple-600/20 transition-all duration-500">
                            </div>
                            <div
                                class="relative bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-500">
                                <div class="flex items-start space-x-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                            02
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-3">Дизайн</h3>
                                        <p class="text-purple-200/90 leading-relaxed">
                                            Создаём интуитивные интерфейсы, которые восхищают пользователей и решают
                                            задачи
                                        </p>
                                        <div class="mt-4 grid grid-cols-2 gap-3">
                                            <div class="text-center p-3 bg-purple-900/30 rounded-lg">
                                                <div class="text-purple-300 font-semibold">UI/UX</div>
                                            </div>
                                            <div class="text-center p-3 bg-purple-900/30 rounded-lg">
                                                <div class="text-purple-300 font-semibold">Адаптив</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Шаг 4 -->
                        <div class="group relative" @mouseenter="setActiveStep(3)">
                            <div
                                class="absolute -inset-3 bg-purple-600/10 rounded-3xl blur-xl group-hover:bg-purple-600/20 transition-all duration-500">
                            </div>
                            <div
                                class="relative bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-purple-600/30 group-hover:border-purple-400/50 transition-all duration-500">
                                <div class="flex items-start space-x-6">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                                            04
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-3">Запуск</h3>
                                        <p class="text-purple-200/90 leading-relaxed">
                                            Тестируем, оптимизируем и запускаем проект с последующей технической
                                            поддержкой
                                        </p>
                                        <div class="mt-4 flex items-center justify-between">
                                            <span class="text-purple-300 text-sm">🚀 Деплой</span>
                                            <span class="text-purple-300 text-sm">🔧 Поддержка</span>
                                            <span class="text-purple-300 text-sm">📈 Аналитика</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Интерактивный прогресс -->
                <div class="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-purple-600/30 mb-12">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-bold text-white">Прогресс проекта</h3>
                        <span class="text-purple-300 text-lg font-semibold">{{ progress }}%</span>
                    </div>
                    <div class="w-full bg-gray-800 rounded-full h-3">
                        <div class="bg-gradient-to-r from-purple-600 to-indigo-600 h-3 rounded-full transition-all duration-1000"
                            :style="{ width: progress + '%' }"></div>
                    </div>
                    <div class="flex justify-between mt-3 text-sm text-purple-400">
                        <span>Начало</span>
                        <span>Завершение</span>
                    </div>
                </div>

                <!-- CTA с анимацией -->
                <div class="text-center">
                    <button
                        class="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-purple-900/30">
                        <span class="relative z-10">Начать проект</span>
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        </div>
                        <div class="absolute -inset-2 bg-purple-500/20 rounded-2xl group-hover:animate-pulse"></div>
                    </button>
                </div>
            </div>
        </section>
    </template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(0)
const progress = ref(25)

const setActiveStep = (step) => {
    activeStep.value = step
    progress.value = (step + 1) * 25
}
</script>

<style scoped>
@keyframes float {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-20px) rotate(5deg);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(15px) rotate(-5deg);
    }
}

@keyframes pulse-slow {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 10s ease-in-out infinite;
}

.animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
}

.group:hover {
    transform: translateY(-5px);
}

.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

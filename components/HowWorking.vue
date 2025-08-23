<template>
    <section class="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <!-- Декоративные элементы -->
        <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-gray-950 to-gray-950">
        </div>
        <div class="absolute top-10 left-10 w-64 h-64 bg-purple-900/3 rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-80 h-80 bg-indigo-900/3 rounded-full blur-3xl"></div>

        <div class="relative z-10 container mx-auto px-4">
            <!-- Заголовок -->
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-white mb-4">
                    Как мы работаем
                </h2>
                <p class="text-xl text-purple-300/80 max-w-3xl mx-auto">
                    Четкий процесс, который гарантирует качественный результат и соблюдение сроков
                </p>
            </div>

            <!-- Процесс с иконками -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                <!-- Шаг 1 -->
                <div
                    class="bg-black/40 backdrop-blur-md p-7 rounded-xl border border-purple-800/20 text-center group hover:border-purple-600/40 transition-all duration-300 hover:bg-black/50">
                    <div
                        class="w-18 h-18 bg-purple-950/40 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-900/30 transition-colors duration-300">
                        <svg class="w-9 h-9 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <div
                        class="w-7 h-7 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold shadow-lg shadow-purple-700/20">
                        1
                    </div>
                    <h3 class="text-lg font-semibold text-white mb-2">Консультация</h3>
                    <p class="text-purple-400/90 text-sm leading-relaxed">
                        Обсуждаем ваши цели, анализируем задачи и составляем план работы
                    </p>
                </div>

                <!-- Шаг 2 -->
                <div
                    class="bg-black/40 backdrop-blur-md p-7 rounded-xl border border-purple-800/20 text-center group hover:border-purple-600/40 transition-all duration-300 hover:bg-black/50">
                    <div
                        class="w-18 h-18 bg-purple-950/40 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-900/30 transition-colors duration-300">
                        <svg class="w-9 h-9 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <div
                        class="w-7 h-7 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold shadow-lg shadow-purple-700/20">
                        2
                    </div>
                    <h3 class="text-lg font-semibold text-white mb-2">Проектирование</h3>
                    <p class="text-purple-400/90 text-sm leading-relaxed">
                        Создаем прототипы, разрабатываем дизайн и утверждаем концепцию
                    </p>
                </div>

                <!-- Шаг 3 -->
                <div
                    class="bg-black/40 backdrop-blur-md p-7 rounded-xl border border-purple-800/20 text-center group hover:border-purple-600/40 transition-all duration-300 hover:bg-black/50">
                    <div
                        class="w-18 h-18 bg-purple-950/40 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-900/30 transition-colors duration-300">
                        <svg class="w-9 h-9 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <div
                        class="w-7 h-7 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold shadow-lg shadow-purple-700/20">
                        3
                    </div>
                    <h3 class="text-lg font-semibold text-white mb-2">Разработка</h3>
                    <p class="text-purple-400/90 text-sm leading-relaxed">
                        Реализуем проект на современных технологиях с регулярными отчетами
                    </p>
                </div>

                <!-- Шаг 4 -->
                <div
                    class="bg-black/40 backdrop-blur-md p-7 rounded-xl border border-purple-800/20 text-center group hover:border-purple-600/40 transition-all duration-300 hover:bg-black/50">
                    <div
                        class="w-18 h-18 bg-purple-950/40 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-900/30 transition-colors duration-300">
                        <svg class="w-9 h-9 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div
                        class="w-7 h-7 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xs font-bold shadow-lg shadow-purple-700/20">
                        4
                    </div>
                    <h3 class="text-lg font-semibold text-white mb-2">Запуск</h3>
                    <p class="text-purple-400/90 text-sm leading-relaxed">
                        Тестируем, запускаем проект и обеспечиваем техническую поддержку
                    </p>
                </div>
            </div>

            <!-- Дополнительная информация -->
            <div class="bg-black/40 backdrop-blur-md rounded-xl p-7 border border-purple-800/20">
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="text-center p-5 bg-purple-950/30 rounded-lg border border-purple-800/20">
                        <div class="text-2xl font-bold text-purple-500 mb-1">2-3 дня</div>
                        <div class="text-purple-400/80 text-sm">Среднее время ответа</div>
                    </div>
                    <div class="text-center p-5 bg-purple-950/30 rounded-lg border border-purple-800/20">
                        <div class="text-2xl font-bold text-purple-500 mb-1">100%</div>
                        <div class="text-purple-400/80 text-sm">Соблюдение сроков</div>
                    </div>
                    <div class="text-center p-5 bg-purple-950/30 rounded-lg border border-purple-800/20">
                        <div class="text-2xl font-bold text-purple-500 mb-1">24/7</div>
                        <div class="text-purple-400/80 text-sm">Техническая поддержка</div>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12">
                <button
                    class="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white px-9 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-purple-900/30 border border-purple-600/30">
                    Обсудить проект
                </button>
                <p class="text-purple-400/70 text-xs mt-3">
                    Первая консультация - бесплатно
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
// Можно добавить анимации при скролле
</script>

<style scoped>
.group:hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease;
}

/* Анимация свечения */
@keyframes glow {

    0%,
    100% {
        box-shadow: 0 0 15px rgba(128, 90, 213, 0.2);
    }

    50% {
        box-shadow: 0 0 25px rgba(128, 90, 213, 0.3);
    }
}

.group:hover {
    animation: glow 2s ease-in-out infinite;
}

/* Улучшенный backdrop blur */
.backdrop-blur-md {
    backdrop-filter: blur(12px);
}
</style>
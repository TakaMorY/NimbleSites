<template>
    <section class="relative py-24 overflow-hidden bg-gray-950">
        <!-- Фоновые элементы -->
        <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black via-gray-950 to-black]">
        </div>
        <div class="absolute top-20 left-10 w-80 h-80 bg-purple-900/3 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-900/3 rounded-full blur-3xl"></div>

        <!-- Грид-сетка -->
        <div
            class="absolute inset-0 opacity-[0.03] bg-[size:50px_50px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]">
        </div>

        <div class="relative z-10 container mx-auto px-4">
            <!-- Заголовок -->
            <div class="text-center mb-20">
                <div
                    class="inline-flex items-center justify-center w-16 h-16 bg-black/50 backdrop-blur-sm rounded-xl border border-purple-800/20 mb-6">
                    <svg class="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9" />
                    </svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    ПРОЦЕСС РАБОТЫ
                </h2>
                <p class="text-lg text-gray-400 max-w-2xl mx-auto">
                    От идеи до реализации: чёткие этапы и гарантированный результат
                </p>
            </div>

            <!-- Вертикальный timeline -->
            <div class="relative max-w-4xl mx-auto">
                <!-- Центральная линия -->
                <div
                    class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-800 hidden md:block">
                </div>

                <div class="space-y-12">
                    <!-- Шаг 1 -->
                    <div class="flex flex-col md:flex-row items-start group">
                        <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                            <div
                                class="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 group-hover:border-purple-600/30 transition-all duration-500">
                                <div class="flex md:justify-end mb-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        01
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-3">Анализ</h3>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Глубокое изучение бизнеса, анализ конкурентов и формирование технического
                                    задания
                                </p>
                                <div class="mt-4 space-y-2">
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Бриф-встреча
                                    </div>
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Анализ рынка
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
                            <div class="flex items-center md:justify-start mb-4 md:mb-0 md:hidden">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span class="text-white text-sm font-bold">1</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Шаг 2 -->
                    <div class="flex flex-col md:flex-row items-start group">
                        <div class="md:w-1/2 md:pr-12 order-2">
                            <div class="flex items-center md:justify-end mb-4 md:mb-0 md:hidden">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span class="text-white text-sm font-bold">2</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1">
                            <div
                                class="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 group-hover:border-purple-600/30 transition-all duration-500">
                                <div class="flex mb-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        02
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-3">Дизайн</h3>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Создание интуитивных интерфейсов с акцентом на пользовательский опыт
                                </p>
                                <div class="mt-4 space-y-2">
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Прототипирование
                                    </div>
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        UI/UX дизайн
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Шаг 3 -->
                    <div class="flex flex-col md:flex-row items-start group">
                        <div class="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-2 md:order-1">
                            <div
                                class="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 group-hover:border-purple-600/30 transition-all duration-500">
                                <div class="flex md:justify-end mb-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        03
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-3">Разработка</h3>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Реализация проекта на современных технологиях с чистым кодом
                                </p>
                                <div class="mt-4 flex flex-wrap gap-2">
                                    <span class="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">Vue.js</span>
                                    <span class="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">Nuxt 3</span>
                                    <span class="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">Tailwind</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-12 order-1 md:order-2">
                            <div class="flex items-center md:justify-start mb-4 md:mb-0 md:hidden">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span class="text-white text-sm font-bold">3</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Шаг 4 -->
                    <div class="flex flex-col md:flex-row items-start group">
                        <div class="md:w-1/2 md:pr-12 order-2">
                            <div class="flex items-center md:justify-end mb-4 md:mb-0 md:hidden">
                                <div class="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span class="text-white text-sm font-bold">4</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1">
                            <div
                                class="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 group-hover:border-purple-600/30 transition-all duration-500">
                                <div class="flex mb-4">
                                    <div
                                        class="w-12 h-12 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        04
                                    </div>
                                </div>
                                <h3 class="text-xl font-bold text-white mb-3">Запуск</h3>
                                <p class="text-gray-400 text-sm leading-relaxed">
                                    Тестирование, деплой проекта и техническая поддержка после запуска
                                </p>
                                <div class="mt-4 space-y-2">
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Деплой
                                    </div>
                                    <div class="flex items-center text-gray-500 text-xs">
                                        <span class="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                                        Поддержка 24/7
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Статистика -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div class="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800">
                    <div class="text-2xl md:text-3xl font-bold text-purple-400 mb-2">7+</div>
                    <div class="text-gray-400 text-sm">Лет опыта</div>
                </div>
                <div class="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800">
                    <div class="text-2xl md:text-3xl font-bold text-purple-400 mb-2">50+</div>
                    <div class="text-gray-400 text-sm">Проектов</div>
                </div>
                <div class="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800">
                    <div class="text-2xl md:text-3xl font-bold text-purple-400 mb-2">100%</div>
                    <div class="text-gray-400 text-sm">Сроки</div>
                </div>
                <div class="text-center p-6 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800">
                    <div class="text-2xl md:text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div class="text-gray-400 text-sm">Поддержка</div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12">
                <button
                    class="bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-purple-600/30">
                    Начать сотрудничество
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Логика не требуется для статичной секции
</script>

<style scoped>
.group:hover div {
    transform: translateX(5px);
    transition: transform 0.3s ease;
}

.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

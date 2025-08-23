<template>
    <section class=" py-20 px-4">
        <div class="container mx-auto max-w-6xl">
            <!-- Заголовок секции -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Как мы работаем</h2>
                <p class="text-xl text-purple-300 max-w-3xl mx-auto">
                    Прозрачный процесс создания сайтов, который гарантирует результат и учитывает все ваши пожелания
                </p>
            </div>

            <!-- Процесс работы -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Шаг 1 -->
                <div
                    class="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-purple-900 hover:border-purple-700 transition-all duration-300 group shadow-lg shadow-purple-900/20">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 rounded-full bg-purple-900 group-hover:bg-purple-800 flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 shadow-md">
                            1</div>
                        <div class="w-12 h-px bg-purple-800 ml-4"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-3">Анализ и планирование</h3>
                    <p class="text-purple-300">
                        Изучаем ваш бизнес, цели и аудиторию. Разрабатываем стратегию и план проекта.
                    </p>
                </div>

                <!-- Шаг 2 -->
                <div
                    class="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-purple-900 hover:border-purple-700 transition-all duration-300 group shadow-lg shadow-purple-900/20">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 rounded-full bg-purple-900 group-hover:bg-purple-800 flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 shadow-md">
                            2</div>
                        <div class="w-12 h-px bg-purple-800 ml-4"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-3">Дизайн и прототипирование</h3>
                    <p class="text-purple-300">
                        Создаем уникальный дизайн, который отражает essence вашего бренда и удобен для пользователей.
                    </p>
                </div>

                <!-- Шаг 3 -->
                <div
                    class="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-purple-900 hover:border-purple-700 transition-all duration-300 group shadow-lg shadow-purple-900/20">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 rounded-full bg-purple-900 group-hover:bg-purple-800 flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 shadow-md">
                            3</div>
                        <div class="w-12 h-px bg-purple-800 ml-4"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-3">Разработка</h3>
                    <p class="text-purple-300">
                        Программируем функционал сайта, интегрируем необходимые системы и обеспечиваем адаптивность.
                    </p>
                </div>

                <!-- Шаг 4 -->
                <div
                    class="bg-gray-900 bg-opacity-70 rounded-xl p-6 border border-purple-900 hover:border-purple-700 transition-all duration-300 group shadow-lg shadow-purple-900/20">
                    <div class="flex items-center mb-6">
                        <div
                            class="w-12 h-12 rounded-full bg-purple-900 group-hover:bg-purple-800 flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 shadow-md">
                            4</div>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-3">Запуск и поддержка</h3>
                    <p class="text-purple-300">
                        Тестируем, запускаем проект и предоставляем дальнейшую техническую поддержку.
                    </p>
                </div>
            </div>

            <!-- Кнопка призыва к действию -->
            <div class="text-center mt-16">
                <button
                    class="bg-purple-800 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg shadow-purple-800/30">
                    Обсудить проект
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Логика компонента, если необходима
</script>
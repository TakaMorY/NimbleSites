<template>
    <!-- Декоративные элементы -->
    <div class="absolute top-0 left-0 w-full h-full opacity-[0.15]">
        <div class="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse-slow">
        </div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse-slow"
            style="animation-delay: 1.5s;"></div>
        <div class="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse-slow"
            style="animation-delay: 0.7s;"></div>
    </div>


    <div class="relative container mx-auto px-4 md:px-6 max-w-6xl">
        <!-- Заголовок секции -->
        <div class="text-center mb-16">
            <span
                class="inline-block text-purple-300 text-lg font-semibold uppercase tracking-wider mb-4 px-4 py-2 bg-gray-800 rounded-full backdrop-blur-sm">
                Почему именно мы
            </span>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-6">
                Создаём сайты, которые <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">запоминаются
                    навсегда</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Индивидуальные решения, которые отражают уникальность вашего бренда <br>и привлекают целевых
                клиентов
            </p>
        </div>

        <!-- Карточки преимуществ -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            <!-- Карточка 1 -->
            <div class="group relative">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-gray-800/40 rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80">
                </div>
                <div
                    class="relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 h-full border border-purple-700/30 group-hover:border-purple-500/60 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.02] overflow-hidden">
                    <div
                        class="absolute top-4 right-4 w-16 h-16 bg-purple-900/20 rounded-full group-hover:scale-125 transition-transform duration-500">
                    </div>
                    <div
                        class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-700 to-gray-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </div>
                    <h3
                        class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                        Уникальный дизайн</h3>
                    <p
                        class="text-gray-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        Создаем визуальную идентичность, которая отражает характер вашего бренда и выделяет
                        среди конкурентов
                    </p>
                    <div
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-600 to-purple-700 group-hover:w-4/5 transition-all duration-500 rounded-full">
                    </div>
                </div>
            </div>
            <!-- 
  -->
            <!-- Карточка 2 -->
            <div class="group relative">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-gray-800/40 rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80">
                </div>
                <div
                    class="relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 h-full border border-blue-700/30 group-hover:border-blue-500/60 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.02] overflow-hidden">
                    <div
                        class="absolute top-4 right-4 w-16 h-16 bg-blue-900/20 rounded-full group-hover:scale-125 transition-transform duration-500">
                    </div>
                    <div
                        class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-700 to-gray-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3
                        class="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                        Молниеносная скорость</h3>
                    <p
                        class="text-gray-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        Оптимизированные сайты с мгновенной загрузкой, которые улучшают пользовательский опыт и
                        конверсию
                    </p>
                    <div
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:w-4/5 transition-all duration-500 rounded-full">
                    </div>
                </div>
            </div>

            <!-- Карточка 3 -->
            <div class="group relative">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-green-900/40 to-gray-800/40 rounded-2xl group-hover:blur-xl transition-all duration-500 opacity-60 group-hover:opacity-80">
                </div>
                <div
                    class="relative bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 h-full border border-green-700/30 group-hover:border-green-500/60 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:scale-[1.02] overflow-hidden">
                    <div
                        class="absolute top-4 right-4 w-16 h-16 bg-green-900/20 rounded-full group-hover:scale-125 transition-transform duration-500">
                    </div>
                    <div
                        class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-green-700 to-gray-800 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                            </path>
                        </svg>
                    </div>
                    <h3
                        class="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                        Премиум качество</h3>
                    <p
                        class="text-gray-300 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        Премиум материалы и внимание к деталям, которые превращают обычный сайт в произведение
                        искусства
                    </p>
                    <div
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-green-600 to-green-700 group-hover:w-4/5 transition-all duration-500 rounded-full">
                    </div>
                </div>
            </div>
        </div>

        <!-- Секция "О нас" -->
        <div class="relative">
            <div class="absolute -inset-8 bg-gradient-to-r from-gray-900/30 to-gray-800/30 blur-xl rounded-3xl">
            </div>
            <div
                class="relative bg-gradient-to-br from-gray-800/80 to-gray-900/60  rounded-3xl p-8 md:p-12 border border-gray-700 shadow-2xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span class="text-purple-300 text-lg font-semibold uppercase tracking-wider mb-2 block">
                            Наши преимущества
                        </span>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
                            Более 2 лет создаём <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">цифровые
                                шедевры</span>
                        </h2>
                        <p class="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                            Каждый проект — это история успеха. Мы превращаем ваши идеи в цифровую реальность,
                            создавая сайты, которые не просто работают, а вдохновляют и приносят результат.
                        </p>

                        <div class="flex flex-wrap gap-4 mb-8">
                            <div class="flex items-center text-gray-300">
                                <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                <span>Индивидуальный подход к каждому клиенту</span>
                            </div>
                            <div class="flex items-center text-gray-300">
                                <div class="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                <span>Современные технологии и тренды</span>
                            </div>
                        </div>

                        <a href="https://t.me/TakaMorY"
                            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl group">
                            Начать проект
                            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-6">
                        <!-- Статистика -->
                        <div
                            class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
                            <div
                                class="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                2+</div>
                            <div class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Года опыта</div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
                            <div
                                class="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                50+</div>
                            <div class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Проектов</div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
                            <div
                                class="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                4.9</div>
                            <div class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Рейтинг</div>
                        </div>
                        <div
                            class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl text-center border border-gray-700 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105">
                            <div
                                class="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                                24/7</div>
                            <div class="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                Поддержка</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.clip-polygon {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.clip-polygon-2 {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.clip-polygon-3 {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}
</style>
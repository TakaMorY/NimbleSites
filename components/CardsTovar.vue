<template>

    <div class="container mx-auto px-4 py-12">
        <h2 class="text-3xl font-bold text-center mb-12 text-white">С чем мы можем вам помочь?</h2>

        <!-- Сетка карточек -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all">

            <!-- Карточка 1 -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">Пример работы</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            3-14 дней
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Web-разработка</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            Создание современных интерфейсов с использованием передовых технологий и фреймворков
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <span>Высокая производительность</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span>Адаптивный дизайн</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 5 000 ₽</div>
                                <div class="text-gray-400 text-xs">индивидуальный расчет</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- Карточка 2: Работа с нейросетями -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">AI примеры</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            3-5 дней
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Работа с нейросетями</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            AI-решения для бизнеса любой сложности и автоматизация процессов
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                                    </path>
                                </svg>
                                <span>Интеллектуальные решения</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <span>Автоматизация процессов</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 200 ₽</div>
                                <div class="text-gray-400 text-xs">задача</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- Карточка 3: Дизайн карточек -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">Дизайн пример</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            2-5 дней
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Дизайн карточек</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            Визуал для продуктов и услуг с уникальным дизайном и готовыми шаблонами
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span>Уникальный дизайн</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                                    </path>
                                </svg>
                                <span>Готовые шаблоны</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 500 ₽</div>
                                <div class="text-gray-400 text-xs">за карточку</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- Карточка 4: Оформление соц. сетей -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">Соцсети пример</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            2-14 дней
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Оформление соц. сетей</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            Контент для Instagram и других платформ с привлечением аудитории
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                                <span>Привлечение аудитории</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span>Единый стиль</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 500 ₽</div>
                                <div class="text-gray-400 text-xs">за пост</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- Карточка 5: Обработка фото -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">Фото пример</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            1-3 дня
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Обработка фото</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            Ретушь и коррекция фотографий профессионального уровня
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span>Профессиональная ретушь</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
                                    </path>
                                </svg>
                                <span>Цветокоррекция</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 10 000 ₽</div>
                                <div class="text-gray-400 text-xs">за проект</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

            <!-- карточка 6 -->
            <NuxtLink to="https://t.me/TakaMorY" class="group block h-full">
                <div
                    class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden text-white h-full flex flex-col border border-gray-700/50">
                    <div class="relative h-52 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20">
                            <div
                                class="w-full h-full bg-gradient-to-br from-[#7216f4]/30 to-[#9a54f9]/30 flex items-center justify-center">
                                <div class="text-center">
                                    <svg class="w-16 h-16 text-white/20 mx-auto mb-2" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-white/40 text-sm">Фото пример</span>
                                </div>
                            </div>
                        </div>
                        <div
                            class="absolute top-4 left-4 bg-[#7216f4] text-white text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                            1-3 дня
                        </div>
                        <div
                            class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                            <div
                                class="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-500">
                                <div
                                    class="bg-[#7216f4] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                                    <span>Смотреть работы</span>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="flex items-start justify-between mb-4">
                            <h3 class="text-xl font-bold text-white">Обработка фото</h3>
                            <div
                                class="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all group-hover:bg-[#7216f4] backdrop-blur-sm">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-5 leading-relaxed flex-1">
                            Ретушь и коррекция фотографий профессионального уровня
                        </p>
                        <div class="space-y-3 mb-5">
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span>Профессиональная ретушь</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-400">
                                <svg class="w-4 h-4 mr-2 text-[#7216f4]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z">
                                    </path>
                                </svg>
                                <span>Цветокоррекция</span>
                            </div>
                        </div>
                        <div class="flex items-center justify-between pt-4 border-t border-gray-700/50">
                            <div>
                                <div class="text-[#f9d1f9] font-bold text-lg">от 10 000 ₽</div>
                                <div class="text-gray-400 text-xs">за проект</div>
                            </div>
                            <button
                                class="bg-[#7216f4] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a3ef5] transition-colors duration-300 transform hover:scale-105">
                                Обсудить проект
                            </button>
                        </div>
                    </div>
                </div>
            </NuxtLink>

        </div>

        <!-- Призыв к действию -->
        <div class="text-center mt-16">
            <p class="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
                Еще больше об услугах, которые я предоставляю, вы можете узнать, связавшись со мной!
            </p>
            <NuxtLink to="https://t.me/TakaMorY" class="
      inline-flex items-center justify-center
      px-8 py-4  
      h-14        
      min-w-40   
      text-lg font-semibold 
      text-white
      hover:text-black bg-[#7216f4] 
      rounded-lg 
      hover:bg-[#f9d1f9] 
      transition-all
      border-2 border-transparent
      hover:border-indigo-100
      group duration-300 transform hover:translate-x-1
    ">
                Обсудить проект
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </NuxtLink>
        </div>
    </div>

</template>
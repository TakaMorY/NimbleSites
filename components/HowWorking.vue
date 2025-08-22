<template>
    <section
        class="bg-gradient-to-br from-gray-900 via-gray-900 to-purple-950 py-16 md:py-24 px-4 relative overflow-hidden">
        <!-- Тёмные декоративные элементы -->
        <div
            class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-gray-900 to-gray-900">
        </div>
        <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-900/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-950/10 rounded-full blur-3xl"></div>

        <div class="container mx-auto max-w-4xl relative z-10">
            <!-- Заголовок -->
            <div class="text-center mb-16">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 bg-black/30 backdrop-blur-sm rounded-2xl mb-6 border border-purple-800/20 shadow-lg shadow-purple-900/10">
                    <svg class="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                        </path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    КАК МЫ РАБОТАЕМ
                </h2>
                <p class="text-purple-300/80 text-lg max-w-2xl mx-auto">
                    Чёткий процесс от первого контакта до запуска проекта
                </p>
            </div>

            <!-- Вертикальный аккордеон процессов -->
            <div class="space-y-4">
                <!-- Шаг 1 -->
                <div class="group" v-for="(step, index) in steps" :key="index">
                    <div
                        class="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-900/30 transition-all duration-300 group-hover:border-purple-700/40 group-hover:bg-black/30">
                        <!-- Заголовок шага -->
                        <button class="w-full flex items-center justify-between p-6 text-left"
                            @click="toggleStep(index)">
                            <div class="flex items-center">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg flex items-center justify-center mr-4 border border-purple-700/30">
                                    <span class="text-white font-bold text-xl">{{ step.number }}</span>
                                </div>
                                <div>
                                    <h3 class="text-white text-xl font-semibold">{{ step.title }}</h3>
                                    <p class="text-purple-400/70 text-sm mt-1">{{ step.subtitle }}</p>
                                </div>
                            </div>
                            <div class="transform transition-transform duration-300"
                                :class="{ 'rotate-180': step.isOpen }">
                                <svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </button>

                        <!-- Контент шага -->
                        <div class="px-6 pb-6 transition-all duration-300" :class="{ 'hidden': !step.isOpen }">
                            <div class="pl-16 border-t border-purple-900/20 pt-6">
                                <p class="text-purple-300/90 mb-4">{{ step.description }}</p>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div v-for="(item, itemIndex) in step.items" :key="itemIndex"
                                        class="flex items-center">
                                        <div class="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                                        <span class="text-purple-400/80 text-sm">{{ item }}</span>
                                    </div>
                                </div>

                                <div class="flex items-center justify-between mt-6 pt-4 border-t border-purple-900/20">
                                    <div class="flex items-center text-purple-500/80 text-sm">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        {{ step.duration }}
                                    </div>
                                    <div class="flex items-center text-purple-500/80 text-sm">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                            </path>
                                        </svg>
                                        {{ step.result }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Прогресс бар -->
            <div class="mt-12 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-purple-900/20">
                <div class="flex items-center justify-between mb-4">
                    <span class="text-purple-300/80 text-sm">Общая продолжительность</span>
                    <span class="text-purple-400 text-sm">~25-30 дней</span>
                </div>
                <div class="w-full bg-purple-900/30 rounded-full h-2">
                    <div class="bg-gradient-to-r from-purple-700 to-fuchsia-700 h-2 rounded-full transition-all duration-1000"
                        :style="{ width: progressWidth }"></div>
                </div>
                <div class="flex justify-between mt-2 text-xs text-purple-500/70">
                    <span>Начало</span>
                    <span>Завершение</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const steps = ref([
    {
        number: '1',
        title: 'Консультация и Анализ',
        subtitle: 'Погружение в ваш бизнес',
        description: 'Глубокое изучение ваших целей, анализ конкурентов и формирование технического задания.',
        items: [
            'Бриф-встреча с заказчиком',
            'Анализ рынка и конкурентов',
            'Составление ТЗ и сметы',
            'Подписание договора'
        ],
        duration: '2-3 дня',
        result: 'Техническое задание',
        isOpen: true
    },
    {
        number: '2',
        title: 'Проектирование и Дизайн',
        subtitle: 'Создание визуальной концепции',
        description: 'Разработка пользовательских интерфейсов, прототипирование и создание дизайн-системы.',
        items: [
            'Создание wireframes',
            'Разработка UI/UX дизайна',
            'Адаптивный дизайн',
            'Утверждение макетов'
        ],
        duration: '5-7 дней',
        result: 'Готовый дизайн',
        isOpen: false
    },
    {
        number: '3',
        title: 'Разработка',
        subtitle: 'Воплощение в код',
        description: 'Написание чистого и эффективного кода с использованием современных технологий и методологий.',
        items: [
            'Frontend разработка',
            'Backend интеграция',
            'Тестирование функционала',
            'Оптимизация производительности'
        ],
        duration: '10-14 дней',
        result: 'Рабочий продукт',
        isOpen: false
    },
    {
        number: '4',
        title: 'Запуск и Поддержка',
        subtitle: 'Завершение проекта',
        description: 'Финальное тестирование, deployment проекта и обеспечение технической поддержки.',
        items: [
            'Финальное тестирование',
            'Деплой на production',
            'Обучение сотрудников',
            'Техническая поддержка'
        ],
        duration: '3-5 дней',
        result: 'Запущенный проект',
        isOpen: false
    }
])

const toggleStep = (index) => {
    steps.value[index].isOpen = !steps.value[index].isOpen
}

const progressWidth = computed(() => {
    const openSteps = steps.value.filter(step => step.isOpen).length
    return `${(openSteps / steps.value.length) * 100}%`
})
</script>

<style scoped>
/* Тёмные тени и границы */
.group:hover .bg-black {
    box-shadow: 0 0 30px rgba(76, 29, 149, 0.15);
}

/* Плавные переходы */
.transition-all {
    transition-property: all;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .flex.items-center.justify-between {
        align-items: flex-start;
    }

    .w-12.h-12 {
        width: 2.5rem;
        height: 2.5rem;
    }
}

/* Стилизация скроллбара */
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: rgba(76, 29, 149, 0.1);
}

::-webkit-scrollbar-thumb {
    background: rgba(128, 90, 213, 0.3);
    border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(128, 90, 213, 0.5);
}
</style>
<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
        <div class="container mx-auto max-w-7xl">
            <!-- Заголовок -->
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                    С чем мы можем вам помочь?
                </span>
                <div
                    class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                </div>
            </h2>

            <!-- Контейнер карточек -->
            <div class="relative">
                <!-- Фоновые элементы -->
                <div
                    class="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                </div>
                <div
                    class="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                </div>

                <!-- Аккордеон карточек -->
                <div class="space-y-6">
                    <!-- Карточка 1: Web-разработка -->
                    <ServiceCard :isActive="activeCard === 0" @toggle="toggleCard(0)" :cardData="cardsData[0]" />

                    <!-- Карточка 2: Работа с нейросетями -->
                    <ServiceCard :isActive="activeCard === 1" @toggle="toggleCard(1)" :cardData="cardsData[1]" />

                    <!-- Карточка 3: Дизайн карточек -->
                    <ServiceCard :isActive="activeCard === 2" @toggle="toggleCard(2)" :cardData="cardsData[2]" />

                    <!-- Карточка 4: Оформление соц. сетей -->
                    <ServiceCard :isActive="activeCard === 3" @toggle="toggleCard(3)" :cardData="cardsData[3]" />

                    <!-- Карточка 5: Готовые шаблоны -->
                    <ServiceCard :isActive="activeCard === 4" @toggle="toggleCard(4)" :cardData="cardsData[4]" />
                </div>
            </div>

            <!-- Призыв к действию -->
            <div class="text-center mt-20 relative z-10">
                <p class="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                    Еще больше об услугах, которые мы предоставляем, вы можете узнать, связавшись с нами!
                </p>
                <NuxtLink to="https://t.me/TakaMorY"
                    class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                    Обсудить проект
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
// Состояние активной карточки
const activeCard = ref(null);

// Функция переключения карточек
const toggleCard = (index) => {
    activeCard.value = activeCard.value === index ? null : index;
};

// Данные для карточек
const cardsData = [
    {
        title: "Web-разработка",
        image: "/images/tovars/Web.jpg",
        time: "3-14 дней",
        description: "Создание современных интерфейсов с использованием передовых технологий и фреймворков",
        features: ["Высокая производительность", "Адаптивный дизайн", "SEO-оптимизация"],
        price: "от 3500 ₽",
        priceNote: "индивидуальный расчет",
        link: "/shablon",
        telegramLink: "https://t.me/TakaMorY",
        icon: "web"
    },
    {
        title: "Работа с нейросетями",
        image: "/images/tovars/ai.jpg",
        time: "1-5 дней",
        description: "AI-решения для бизнеса любой сложности и автоматизация процессов",
        features: ["Интеллектуальные решения", "Автоматизация процессов", "Интеграция с API"],
        price: "от 200 ₽",
        priceNote: "",
        link: "https://t.me/TakaMorY",
        telegramLink: "https://t.me/TakaMorY",
        icon: "ai"
    },
    {
        title: "Дизайн карточек",
        image: "/images/tovars/card.jpg",
        time: "1-5 дней",
        description: "Визуал для продуктов и услуг с уникальным дизайном и готовыми шаблонами",
        features: ["Уникальный дизайн", "Готовые шаблоны", "Быстрая реализация"],
        price: "от 300 ₽",
        priceNote: "за карточку",
        link: "/shablon",
        telegramLink: "https://t.me/TakaMorY",
        icon: "design"
    },
    {
        title: "Оформление соц. сетей",
        image: "/images/tovars/soc.jpg",
        time: "2-14 дней",
        description: "Контент для Instagram и других платформ с привлечением аудитории",
        features: ["Привлечение аудитории", "Единый стиль", "Контент-стратегия"],
        price: "от 250 ₽",
        priceNote: "за пост",
        link: "https://t.me/TakaMorY",
        telegramLink: "https://t.me/TakaMorY",
        icon: "social"
    },
    {
        title: "Готовые шаблоны",
        image: "/images/tovars/shablon.jpg",
        time: "1-3 дня",
        description: "Шаблоны для сайтов и дизайна карточек",
        features: ["Готовые дизайны карточек", "Готовые шаблоны для сайтов", "Легкая кастомизация"],
        price: "от 1000 ₽",
        priceNote: "за проект",
        link: "/shablon",
        telegramLink: "https://t.me/TakaMorY",
        icon: "templates"
    }
];
</script>

<style scoped>
.animation-delay-2000 {
    animation-delay: 2s;
}

/* Анимация появления карточек */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.service-card {
    animation: fadeInUp 0.6s ease-out forwards;
}

.service-card:nth-child(1) {
    animation-delay: 0.1s;
}

.service-card:nth-child(2) {
    animation-delay: 0.2s;
}

.service-card:nth-child(3) {
    animation-delay: 0.3s;
}

.service-card:nth-child(4) {
    animation-delay: 0.4s;
}

.service-card:nth-child(5) {
    animation-delay: 0.5s;
}
</style>
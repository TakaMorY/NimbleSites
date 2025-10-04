<template>
    <section ref="sectionRef" class="services-section" :class="{ 'animate-in': isInView }">
        <div class="container">
            <h2 class="section-title">Наши услуги</h2>
            <div class="services-grid">
                <div v-for="(service, index) in services" :key="service.title" class="service-card"
                    :style="`--i: ${index}`" @mouseenter="startAnimation(index)" @mouseleave="stopAnimation(index)">
                    <div class="card-inner">
                        <div class="card-front">
                            <div class="card-bg" :style="service.bgStyle"></div>
                            <div class="card-overlay"></div>
                            <div class="card-content">
                                <div class="icon-wrapper">
                                    <div class="animated-icon">
                                        {{ service.icon }}
                                    </div>
                                </div>
                                <h3 class="card-title">{{ service.title }}</h3>
                                <p class="card-description">{{ service.description }}</p>
                                <div class="hover-indicator">
                                    <span>Подробнее</span>
                                    <div class="arrow">→</div>
                                </div>
                            </div>
                        </div>

                        <div class="card-back">
                            <div class="card-bg" :style="service.bgStyle"></div>
                            <div class="card-overlay"></div>
                            <div class="back-content">
                                <div class="back-icon">
                                    {{ service.icon }}
                                </div>
                                <h3 class="back-title">{{ service.title }}</h3>
                                <ul class="feature-list">
                                    <li v-for="feature in service.features" :key="feature">
                                        {{ feature }}
                                    </li>
                                </ul>
                                <button class="cta-button">
                                    <span>Обсудить проект</span>
                                    <div class="button-arrow">→</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Оптимизированные декоративные элементы -->
        <div class="bg-decoration">
            <div class="floating-orb orb-1"></div>
            <div class="floating-orb orb-2"></div>
            <div class="floating-orb orb-3"></div>
        </div>

        <!-- Анимированный фон с частицами -->
        <div class="animated-bg">
            <div class="grid-pattern"></div>
            <div class="pulse-element pulse-1"></div>
            <div class="pulse-element pulse-2"></div>
            <div class="pulse-element pulse-3"></div>
        </div>
    </section>
</template>

<script setup>
// Оптимизированный наблюдатель за скроллом
const sectionRef = ref(null);
const isInView = ref(false);

const { stop } = useIntersectionObserver(
    sectionRef,
    ([{ isIntersecting }]) => {
        if (isIntersecting && !isInView.value) {
            isInView.value = true;
            stop(); // Останавливаем наблюдение после первого срабатывания
        }
    },
    {
        threshold: 0.2,
        rootMargin: '50px'
    }
);

const services = ref([
    {
        icon: "💻",
        title: "Веб-разработка",
        description: "Создание современных и адаптивных веб-сайтов",
        features: [
            "Адаптивный дизайн",
            "Оптимизация скорости",
            "SEO-оптимизация",
            "Техническая поддержка"
        ],
        // Серо-фиолетовые градиенты
        bgStyle: "background: linear-gradient(135deg, rgba(55, 65, 81, 0.9), rgba(76, 29, 149, 0.7)), url('/images/web-dev-bg.jpg') center/cover;"
    },
    {
        icon: "🎨",
        title: "UI/UX Дизайн",
        description: "Интуитивные и привлекательные интерфейсы",
        features: [
            "Прототипирование",
            "Дизайн-системы",
            "Анимации",
            "User Research"
        ],
        bgStyle: "background: linear-gradient(135deg, rgba(75, 85, 99, 0.9), rgba(91, 33, 182, 0.7)), url('/images/ui-ux-bg.jpg') center/cover;"
    },
    {
        icon: "🚀",
        title: "Оптимизация",
        description: "Ускорение работы вашего сайта",
        features: [
            "Анализ производительности",
            "Оптимизация кода",
            "Кэширование",
            "CDN настройка"
        ],
        bgStyle: "background: linear-gradient(135deg, rgba(107, 114, 128, 0.9), rgba(124, 58, 237, 0.7)), url('/images/optimization-bg.jpg') center/cover;"
    },
    {
        icon: "🛒",
        title: "E-commerce",
        description: "Интернет-магазины любой сложности",
        features: [
            "Корзина покупок",
            "Платежные системы",
            "Управление товарами",
            "Аналитика продаж"
        ],
        bgStyle: "background: linear-gradient(135deg, rgba(55, 65, 81, 0.9), rgba(109, 40, 217, 0.7)), url('/images/ecommerce-bg.jpg') center/cover;"
    },
    {
        icon: "📱",
        title: "Мобильная адаптация",
        description: "Идеальное отображение на всех устройствах",
        features: [
            "Mobile-first подход",
            "Touch-оптимизация",
            "Быстрая загрузка",
            "Нативные ощущения"
        ],
        bgStyle: "background: linear-gradient(135deg, rgba(75, 85, 99, 0.9), rgba(76, 29, 149, 0.7)), url('/images/mobile-bg.jpg') center/cover;"
    },
    {
        icon: "🔧",
        title: "Техническая поддержка",
        description: "Постоянное сопровождение и развитие",
        features: [
            "Регулярные обновления",
            "Мониторинг работы",
            "Резервное копирование",
            "Консультации"
        ],
        bgStyle: "background: linear-gradient(135deg, rgba(107, 114, 128, 0.9), rgba(91, 33, 182, 0.7)), url('/images/support-bg.jpg') center/cover;"
    }
]);

const animatedCards = ref([]);

const startAnimation = (index) => {
    animatedCards.value[index] = true;
};

const stopAnimation = (index) => {
    animatedCards.value[index] = false;
};

// Оптимизация производительности
onMounted(() => {
    // Предзагрузка критических ресурсов
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // Фоновая предзагрузка
        });
    }
});
</script>

<style scoped>
.services-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #111827 100%);
    padding: 4rem 1rem;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.services-section.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
}

.section-title {
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    color: #f9fafb;
    margin-bottom: 4rem;
    animation: gentleFadeIn 2s ease-out;
    text-shadow: 0 2px 20px rgba(139, 92, 246, 0.2);
}

@media (min-width: 768px) {
    .section-title {
        font-size: 3rem;
    }
}

.services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.service-card {
    height: 26rem;
    cursor: pointer;
    perspective: 1200px;
    opacity: 0;
    transform: translateY(50px) scale(0.95);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.services-section.animate-in .service-card {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.service-card:nth-child(1) {
    transition-delay: 0.1s;
}

.service-card:nth-child(2) {
    transition-delay: 0.2s;
}

.service-card:nth-child(3) {
    transition-delay: 0.3s;
}

.service-card:nth-child(4) {
    transition-delay: 0.4s;
}

.service-card:nth-child(5) {
    transition-delay: 0.5s;
}

.service-card:nth-child(6) {
    transition-delay: 0.6s;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
    will-change: transform;
}

.service-card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    backface-visibility: hidden;
    box-shadow:
        0 10px 30px rgba(0, 0, 0, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.2);
}

.card-back {
    transform: rotateY(180deg);
}

/* Общие стили для фона и оверлея */
.card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,
            rgba(31, 41, 55, 0.8) 0%,
            rgba(55, 65, 81, 0.6) 50%,
            rgba(17, 24, 39, 0.9) 100%);
}

.service-card:hover .card-bg {
    transform: scale(1.05);
}

/* Стили для лицевой стороны */
.card-front .card-content {
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.icon-wrapper {
    margin-bottom: 1.5rem;
}

.animated-icon {
    font-size: 3rem;
    transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.service-card:hover .animated-icon {
    transform: scale(1.1) rotate(5deg);
}

.card-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
}

.card-description {
    color: #d1d5db;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

.hover-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #9ca3af;
    font-size: 0.9rem;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .hover-indicator {
    opacity: 1;
    transform: translateY(0);
}

.hover-indicator .arrow {
    transition: transform 0.6s ease;
}

.service-card:hover .hover-indicator .arrow {
    transform: translateX(3px);
}

/* Стили для обратной стороны */
.back-content {
    position: relative;
    z-index: 2;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.back-icon {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    opacity: 0.7;
}

.back-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    text-align: center;
    margin-bottom: 1.5rem;
}

.feature-list {
    flex-grow: 1;
    margin-bottom: 1.5rem;
}

.feature-list li {
    color: #e5e7eb;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    transition: all 0.4s ease;
    padding: 0.25rem 0;
}

.feature-list li:hover {
    color: white;
    transform: translateX(5px);
}

.feature-list li::before {
    content: "▸";
    color: #8b5cf6;
    margin-right: 0.5rem;
    transition: all 0.4s ease;
}

.feature-list li:hover::before {
    color: #a78bfa;
    transform: scale(1.1);
}

.cta-button {
    width: 100%;
    padding: 0.875rem 1.25rem;
    background: linear-gradient(135deg, #6b7280 0%, #4c1d95 100%);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(76, 29, 149, 0.3);
}

.cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.8s ease;
}

.cta-button:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(76, 29, 149, 0.4);
}

.cta-button:hover::before {
    left: 100%;
}

.cta-button:hover .button-arrow {
    transform: translateX(3px);
}

.button-arrow {
    transition: transform 0.4s ease;
}

/* Оптимизированные декоративные элементы */
.bg-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.floating-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.05;
    animation: float 12s ease-in-out infinite;
    will-change: transform;
}

.orb-1 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #6b7280, #7c3aed);
    top: 15%;
    left: 10%;
    animation-delay: 0s;
}

.orb-2 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #4b5563, #5b21b6);
    top: 65%;
    right: 15%;
    animation-delay: -4s;
}

.orb-3 {
    width: 180px;
    height: 180px;
    background: linear-gradient(135deg, #374151, #8b5cf6);
    bottom: 20%;
    left: 20%;
    animation-delay: -8s;
}

/* Анимированный фон */
.animated-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
    opacity: 0.3;
}

.grid-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
}

.pulse-element {
    position: absolute;
    border-radius: 50%;
    background: rgba(139, 92, 246, 0.1);
    animation: pulse 8s ease-in-out infinite;
}

.pulse-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    right: 10%;
    animation-delay: 0s;
}

.pulse-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    left: 5%;
    animation-delay: -2s;
}

.pulse-3 {
    width: 80px;
    height: 80px;
    bottom: 30%;
    right: 25%;
    animation-delay: -4s;
}

/* Анимации */
@keyframes gentleFadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) translateX(0) scale(1);
    }

    33% {
        transform: translateY(-15px) translateX(8px) scale(1.02);
    }

    66% {
        transform: translateY(8px) translateX(-8px) scale(0.98);
    }
}

@keyframes gridMove {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(50px, 50px);
    }
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 0.1;
    }

    50% {
        transform: scale(1.5);
        opacity: 0.05;
    }
}

/* Плавные переходы для всей карточки */
.service-card {
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
    transform: translateY(-5px) scale(1.02);
}

/* Градиентная обводка */
.service-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    padding: 1px;
    background: linear-gradient(135deg, rgba(107, 114, 128, 0.4), rgba(76, 29, 149, 0.2));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
    z-index: 3;
}

.service-card:hover::after {
    opacity: 1;
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
    .service-card {
        height: 22rem;
    }

    .card-title {
        font-size: 1.3rem;
    }

    .card-description {
        font-size: 0.9rem;
    }

    .services-section {
        padding: 2rem 1rem;
    }

    .card-front .card-content,
    .back-content {
        padding: 1.5rem;
    }

    .floating-orb {
        display: none;
    }

    .grid-pattern {
        background-size: 30px 30px;
    }
}

/* Оптимизация для слабых устройств */
@media (prefers-reduced-motion: reduce) {

    .service-card,
    .card-inner,
    .animated-icon,
    .cta-button,
    .floating-orb,
    .pulse-element {
        transition: none !important;
        animation: none !important;
    }

    .services-section {
        transition: opacity 0.5s ease !important;
    }
}
</style>
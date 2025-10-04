<script setup>
// import { useAuthStore } from '@/stores/auth';
// const authStore = useAuthStore();

// const logout = async () => {
//     await authStore.logout();
//     console.log(`Вышел из аккаунта!`)

// };

import { onMounted } from 'vue';

onMounted(() => {
});


const visible = ref(false)

onMounted(() => {
    visible.value = true
})

const section = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    });

    if (section.value) {
        observer.observe(section.value);
    }
});


import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';




definePageMeta({
    layout: 'default' // Явное указание layout
});
</script>

<style>
/* Анимация меню */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Анимация затемнения */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

:target {
    scroll-margin-top: 5rem;
}
</style>




<template>



    <main>
        <section class="bg-gradient-to-br from-gray-900 to-gray-800">
            <herosection />

        </section>
        <section class="bg-gradient-to-br from-gray-900 to-gray-800" id="cardstovar">
            <CardsTovar />
        </section>


        <section id="whyus"
            class="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            <!-- Декоративные элементы -->
            <WhyUs />
        </section>

        <section class=" bg-gray-900">
            <HowWorking />
        </section>
    </main>



</template>
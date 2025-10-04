<!-- pages/admin/index.vue -->
<template>
    <div class="min-h-screen bg-gray-900">
        <header class="bg-gray-800 border-b border-gray-700">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <h1 class="text-xl font-bold text-white">Панель управления</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <span class="text-gray-300">Администратор</span>
                        <button @click="handleLogout"
                            class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                            Выйти
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main class="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div class="space-y-6">
                <!-- Карточка управления техобслуживанием -->
                <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-white">Режим технического обслуживания</h2>
                        <span class="px-3 py-1 rounded-full text-sm font-medium"
                            :class="maintenanceState.enabled ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'">
                            {{ maintenanceState.enabled ? 'Активен' : 'Неактивен' }}
                        </span>
                    </div>

                    <p class="text-gray-400 mb-6">
                        При включении этого режима все пользователи, кроме администраторов, будут перенаправлены
                        на страницу технического обслуживания.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <button v-if="!maintenanceState.enabled" @click="enableMaintenance"
                            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            Включить техработы
                        </button>

                        <button v-else @click="disableMaintenance"
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Отключить техработы
                        </button>
                    </div>

                    <div v-if="maintenanceState.enabled" class="mt-6 p-4 bg-gray-700/50 rounded-xl">
                        <div class="text-center">
                            <p class="text-green-400 font-medium">Режим техобслуживания активен</p>
                            <p class="text-gray-400 text-sm mt-1">Обычные пользователи перенаправляются на страницу
                                техработ</p>
                            <p class="text-gray-400 text-sm mt-2" v-if="maintenanceState.enabledAt">
                                Включен: {{ formatDate(maintenanceState.enabledAt) }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Информация о сессии -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-semibold text-white mb-4">Информация о сессии</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Статус</span>
                                <span class="text-green-400 font-medium">Администратор</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Время входа</span>
                                <span class="text-white">{{ formatDate(adminSession.loginTime) }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Режим техработ</span>
                                <span :class="maintenanceState.enabled ? 'text-red-400' : 'text-green-400'"
                                    class="font-medium">
                                    {{ maintenanceState.enabled ? 'Включен' : 'Выключен' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-semibold text-white mb-4">Действия</h3>
                        <div class="space-y-3">
                            <button @click="testAsUser"
                                class="w-full text-left p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
                                <span class="text-white">Открыть сайт как пользователь</span>
                            </button>
                            <button @click="clearAllData"
                                class="w-full text-left p-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors duration-200">
                                <span class="text-white">Очистить все данные</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const { adminSession, logout, isAdmin } = useAuth()
const { maintenanceState, enable, disable } = useMaintenance()

const handleLogout = () => {
    logout()
    navigateTo('/admin/login')
}

const enableMaintenance = () => {
    enable()
    console.log('Maintenance enabled')
}

const disableMaintenance = () => {
    disable()
    console.log('Maintenance disabled')
}

const testAsUser = () => {
    window.open('/', '_blank')
}

const clearAllData = () => {
    if (confirm('Очистить все данные (сессии и настройки)?')) {
        localStorage.removeItem('adminSession')
        localStorage.removeItem('maintenanceState')
        window.location.reload()
    }
}

const formatDate = (timestamp: number | null) => {
    if (!timestamp) return 'Неизвестно'
    return new Date(timestamp).toLocaleString('ru-RU')
}

// Если не админ, перенаправляем на страницу логина
onMounted(() => {
    if (!isAdmin.value) {
        navigateTo('/admin/login')
    }
})
</script>
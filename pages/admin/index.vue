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
                        <div class="flex items-center space-x-2">
                            <span class="px-3 py-1 rounded-full text-sm font-medium"
                                :class="maintenanceState.enabled ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'">
                                {{ maintenanceState.enabled ? 'Активен' : 'Неактивен' }}
                            </span>
                            <button @click="loadState" class="p-1 text-gray-400 hover:text-white transition-colors"
                                title="Обновить состояние">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p class="text-gray-400 mb-6">
                        При включении этого режима все пользователи на всех устройствах будут перенаправлены
                        на страницу технического обслуживания. Состояние синхронизируется между всеми администраторами.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <button v-if="!maintenanceState.enabled" @click="enableMaintenance" :disabled="loading"
                            class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            {{ loading ? 'Включение...' : 'Включить техработы' }}
                        </button>

                        <button v-else @click="disableMaintenance" :disabled="loading"
                            class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {{ loading ? 'Отключение...' : 'Отключить техработы' }}
                        </button>
                    </div>

                    <div v-if="maintenanceState.enabled" class="mt-6 p-4 bg-gray-700/50 rounded-xl">
                        <div class="text-center">
                            <p class="text-green-400 font-medium">Режим техобслуживания активен</p>
                            <p class="text-gray-400 text-sm mt-1">Все пользователи перенаправляются на страницу техработ
                            </p>
                            <p class="text-gray-400 text-sm mt-2" v-if="maintenanceState.enabledAt">
                                Включен: {{ formatDate(maintenanceState.enabledAt) }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Информация о системе -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                        <h3 class="text-lg font-semibold text-white mb-4">Статистика системы</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-400">Статус сервера</span>
                                <span class="text-green-400 font-medium">Online</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Режим техработ</span>
                                <span :class="maintenanceState.enabled ? 'text-red-400' : 'text-green-400'"
                                    class="font-medium">
                                    {{ maintenanceState.enabled ? 'Включен' : 'Выключен' }}
                                </span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-400">Авторизация</span>
                                <span class="text-green-400 font-medium">Администратор</span>
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
                            <button @click="openNewAdmin"
                                class="w-full text-left p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200">
                                <span class="text-white">Открыть новую админ-сессию</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Автообновление -->
                <div class="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
                    <h3 class="text-lg font-semibold text-white mb-4">Автообновление</h3>
                    <div class="flex items-center justify-between">
                        <p class="text-gray-400">Автоматически обновлять состояние каждые 10 секунд</p>
                        <button @click="toggleAutoRefresh"
                            :class="autoRefreshEnabled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'"
                            class="px-4 py-2 rounded-lg text-white transition-colors duration-200">
                            {{ autoRefreshEnabled ? 'Включено' : 'Выключено' }}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const { adminSession, logout } = useAuth()
const { maintenanceState, enable, disable, loadState } = useMaintenance()

const loading = ref(false)
const autoRefreshEnabled = ref(false)
let refreshInterval: NodeJS.Timeout | null = null

const handleLogout = () => {
    logout()
    navigateTo('/admin/login')
}

const enableMaintenance = async () => {
    loading.value = true
    try {
        await enable()
        console.log('Maintenance enabled globally')
    } catch (error) {
        console.error('Failed to enable maintenance:', error)
    } finally {
        loading.value = false
    }
}

const disableMaintenance = async () => {
    loading.value = true
    try {
        await disable()
        console.log('Maintenance disabled globally')
    } catch (error) {
        console.error('Failed to disable maintenance:', error)
    } finally {
        loading.value = false
    }
}

const testAsUser = () => {
    window.open('/', '_blank')
}

const openNewAdmin = () => {
    window.open('/admin/login', '_blank')
}

const toggleAutoRefresh = () => {
    autoRefreshEnabled.value = !autoRefreshEnabled.value

    if (autoRefreshEnabled.value) {
        refreshInterval = setInterval(() => {
            loadState()
        }, 10000) // Обновлять каждые 10 секунд
    } else if (refreshInterval) {
        clearInterval(refreshInterval)
        refreshInterval = null
    }
}

const formatDate = (timestamp: number | null) => {
    if (!timestamp) return 'Неизвестно'
    return new Date(timestamp).toLocaleString('ru-RU')
}

// Загружаем состояние при монтировании
onMounted(async () => {
    await loadState()

    // Включаем автообновление по умолчанию
    toggleAutoRefresh()
})

// Очищаем интервал при размонтировании
onUnmounted(() => {
    if (refreshInterval) {
        clearInterval(refreshInterval)
    }
})
</script>
// plugins/maintenance.client.ts
export default defineNuxtPlugin(async () => {
    if (!process.client) return

    const { state, loadState } = useMaintenance()

    // Загружаем начальное состояние
    await loadState()

    // Обновляем состояние каждые 2 секунды
    const interval = setInterval(async () => {
        await loadState()
    }, 2000)

    // Очищаем интервал при уничтожении плагина
    return {
        provide: {
            maintenanceCleanup: () => clearInterval(interval)
        }
    }
})
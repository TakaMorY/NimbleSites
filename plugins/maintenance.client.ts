// plugins/maintenance.client.ts
export default defineNuxtPlugin(() => {
    if (!process.client) return

    const { loadState } = useMaintenance()

    // Загружаем начальное состояние
    loadState()

    // Обновляем каждые 3 секунды
    setInterval(() => {
        loadState()
    }, 3000)
})
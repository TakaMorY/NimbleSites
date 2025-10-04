// plugins/init.client.ts
export default defineNuxtPlugin(async () => {
    // Загружаем глобальное состояние техобслуживания при запуске приложения
    const { loadState } = useMaintenance()
    await loadState()

    console.log('Global maintenance state loaded')
})
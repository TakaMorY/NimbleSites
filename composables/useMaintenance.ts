// composables/useMaintenance.ts
export const useMaintenance = () => {
    const maintenanceState = useState('maintenanceState', () => ({
        enabled: false,
        enabledAt: null as number | null
    }))

    // Загружаем состояние с сервера
    const loadState = async () => {
        try {
            const state = await $fetch('/api/maintenance/state')
            maintenanceState.value = state
        } catch (error) {
            console.error('Failed to load maintenance state:', error)
        }
    }

    // Включаем техобслуживание
    const enable = async () => {
        try {
            const state = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: true }
            })
            maintenanceState.value = state
        } catch (error) {
            console.error('Failed to enable maintenance:', error)
        }
    }

    // Выключаем техобслуживание
    const disable = async () => {
        try {
            const state = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: false }
            })
            maintenanceState.value = state
        } catch (error) {
            console.error('Failed to disable maintenance:', error)
        }
    }

    const isMaintenanceEnabled = computed(() => maintenanceState.value.enabled)

    return {
        maintenanceState: readonly(maintenanceState),
        loadState,
        enable,
        disable,
        isMaintenanceEnabled
    }
}
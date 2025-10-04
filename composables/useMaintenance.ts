// composables/useMaintenance.ts
export const useMaintenance = () => {
    const maintenanceState = useState('maintenanceState', () => ({
        enabled: false,
        enabledAt: null as number | null
    }))

    // Автоматически загружаем сохраненное состояние при создании композабла
    if (process.client) {
        const saved = localStorage.getItem('maintenanceState')
        if (saved) {
            try {
                maintenanceState.value = JSON.parse(saved)
            } catch (e) {
                localStorage.removeItem('maintenanceState')
            }
        }
    }

    const enable = () => {
        const newState = {
            enabled: true,
            enabledAt: Date.now()
        }

        maintenanceState.value = newState

        if (process.client) {
            localStorage.setItem('maintenanceState', JSON.stringify(newState))
        }
    }

    const disable = () => {
        const newState = {
            enabled: false,
            enabledAt: null
        }

        maintenanceState.value = newState

        if (process.client) {
            localStorage.setItem('maintenanceState', JSON.stringify(newState))
        }
    }

    const isMaintenanceEnabled = computed(() => maintenanceState.value.enabled)

    return {
        maintenanceState: readonly(maintenanceState),
        enable,
        disable,
        isMaintenanceEnabled
    }
}
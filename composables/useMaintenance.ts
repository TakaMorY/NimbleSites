// composables/useMaintenance.ts
export const useMaintenance = () => {
    const state = useState('maintenance', () => ({
        enabled: false,
        enabledAt: null as number | null,
        message: ''
    }))

    // Загружаем состояние с сервера
    const loadState = async (): Promise<boolean> => {
        try {
            console.log('Loading maintenance state...')
            const newState = await $fetch('/api/maintenance/state')
            state.value = newState
            console.log('Maintenance state loaded:', newState)
            return true
        } catch (error) {
            console.error('Failed to load maintenance state:', error)
            return false
        }
    }

    // Включаем техобслуживание
    const enableMaintenance = async (message?: string): Promise<boolean> => {
        try {
            console.log('Enabling maintenance...')
            const newState = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: {
                    enabled: true,
                    message: message || 'Сайт на техническом обслуживании'
                }
            })
            state.value = newState
            console.log('Maintenance enabled:', newState)
            return true
        } catch (error) {
            console.error('Failed to enable maintenance:', error)
            return false
        }
    }

    // Выключаем техобслуживание
    const disableMaintenance = async (): Promise<boolean> => {
        try {
            console.log('Disabling maintenance...')
            const newState = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: false }
            })
            state.value = newState
            console.log('Maintenance disabled:', newState)
            return true
        } catch (error) {
            console.error('Failed to disable maintenance:', error)
            return false
        }
    }

    return {
        state: readonly(state),
        loadState,
        enableMaintenance,
        disableMaintenance
    }
}
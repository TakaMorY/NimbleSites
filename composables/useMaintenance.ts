// composables/useMaintenance.ts
export const useMaintenance = () => {
    const state = useState('maintenance', () => ({
        enabled: false,
        enabledAt: null as number | null,
        message: ''
    }))

    // Загружаем состояние с сервера
    const load = async (): Promise<boolean> => {
        try {
            const newState = await $fetch('/api/maintenance/state')
            state.value = newState
            return true
        } catch (error) {
            console.error('Failed to load maintenance state:', error)
            return false
        }
    }

    // Включаем техобслуживание
    const enable = async (message?: string): Promise<boolean> => {
        try {
            const newState = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: true, message }
            })
            state.value = newState
            return true
        } catch (error) {
            console.error('Failed to enable maintenance:', error)
            return false
        }
    }

    // Выключаем техобслуживание
    const disable = async (): Promise<boolean> => {
        try {
            const newState = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: false }
            })
            state.value = newState
            return true
        } catch (error) {
            console.error('Failed to disable maintenance:', error)
            return false
        }
    }

    return {
        state: readonly(state),
        load,
        enable,
        disable
    }
}
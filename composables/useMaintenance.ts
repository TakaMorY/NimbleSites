// composables/useMaintenance.ts
export const useMaintenance = () => {
    const state = useState('maintenance', () => ({
        enabled: false,
        enabledAt: null as number | null,
        message: ''
    }))

    const loadState = async () => {
        try {
            const newState = await $fetch('/api/maintenance/state')
            state.value = newState
        } catch (error) {
            console.error('Failed to load maintenance state:', error)
        }
    }

    const enableMaintenance = async () => {
        try {
            const newState = await $fetch('/api/maintenance/state', {
                method: 'POST',
                body: { enabled: true }
            })
            state.value = newState
            return true
        } catch (error) {
            console.error('Failed to enable maintenance:', error)
            return false
        }
    }

    const disableMaintenance = async () => {
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
        loadState,
        enableMaintenance,
        disableMaintenance
    }
}
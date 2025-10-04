// composables/useMaintenance.ts
export const useMaintenance = () => {
    const state = ref({
        enabled: false,
        enabledAt: null as number | null,
        message: 'Сайт на техническом обслуживании'
    })

    // Инициализация
    if (process.client) {
        const saved = localStorage.getItem('maintenanceState')
        if (saved) {
            try {
                state.value = JSON.parse(saved)
            } catch (e) {
                console.error('Error loading maintenance state:', e)
            }
        }

        // Слушаем изменения в других вкладках
        window.addEventListener('storage', (e) => {
            if (e.key === 'maintenanceState' && e.newValue) {
                try {
                    state.value = JSON.parse(e.newValue)
                } catch (e) {
                    console.error('Error syncing maintenance state:', e)
                }
            }
        })
    }

    const enable = (message?: string): void => {
        if (process.client) {
            const newState = {
                enabled: true,
                enabledAt: Date.now(),
                message: message || 'Сайт на техническом обслуживании'
            }

            state.value = newState
            localStorage.setItem('maintenanceState', JSON.stringify(newState))
        }
    }

    const disable = (): void => {
        if (process.client) {
            const newState = {
                enabled: false,
                enabledAt: null,
                message: 'Сайт на техническом обслуживании'
            }

            state.value = newState
            localStorage.setItem('maintenanceState', JSON.stringify(newState))
        }
    }

    return {
        state: readonly(state),
        enable,
        disable
    }
}
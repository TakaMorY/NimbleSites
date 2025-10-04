// composables/useMaintenance.ts
export const useMaintenance = () => {
    const state = ref({
        enabled: false,
        enabledAt: null as number | null,
        message: 'Сайт на техническом обслуживании'
    })

    // BroadcastChannel для синхронизации между вкладками
    let broadcastChannel: BroadcastChannel | null = null

    // Инициализация
    const init = () => {
        if (process.client) {
            // Загружаем из localStorage
            const saved = localStorage.getItem('maintenanceState')
            if (saved) {
                try {
                    state.value = JSON.parse(saved)
                } catch (e) {
                    console.error('Error loading maintenance state:', e)
                }
            }

            // Создаем канал для синхронизации
            broadcastChannel = new BroadcastChannel('maintenance')

            // Слушаем сообщения от других вкладок
            broadcastChannel.onmessage = (event) => {
                if (event.data.type === 'STATE_UPDATE') {
                    state.value = event.data.state
                    localStorage.setItem('maintenanceState', JSON.stringify(event.data.state))
                }
            }
        }
    }

    // Включение техобслуживания
    const enable = (message?: string) => {
        if (process.client) {
            const newState = {
                enabled: true,
                enabledAt: Date.now(),
                message: message || 'Сайт на техническом обслуживании'
            }

            state.value = newState
            localStorage.setItem('maintenanceState', JSON.stringify(newState))

            // Отправляем сообщение другим вкладкам
            if (broadcastChannel) {
                broadcastChannel.postMessage({
                    type: 'STATE_UPDATE',
                    state: newState
                })
            }
        }
    }

    // Выключение техобслуживания
    const disable = () => {
        if (process.client) {
            const newState = {
                enabled: false,
                enabledAt: null,
                message: 'Сайт на техническом обслуживании'
            }

            state.value = newState
            localStorage.setItem('maintenanceState', JSON.stringify(newState))

            // Отправляем сообщение другим вкладкам
            if (broadcastChannel) {
                broadcastChannel.postMessage({
                    type: 'STATE_UPDATE',
                    state: newState
                })
            }
        }
    }

    // Синхронизация состояния
    const syncState = (newState: any) => {
        state.value = newState
        if (process.client) {
            localStorage.setItem('maintenanceState', JSON.stringify(newState))
        }
    }

    return {
        state: readonly(state),
        init,
        enable,
        disable,
        syncState
    }
}
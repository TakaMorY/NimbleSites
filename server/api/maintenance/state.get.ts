// server/api/maintenance/state.get.ts
export default defineEventHandler(async () => {
    try {
        const storage = useStorage('maintenance')
        const state = await storage.getItem('state')

        return state || {
            enabled: false,
            enabledAt: null,
            message: 'Сайт на техническом обслуживании'
        }
    } catch (error) {
        console.error('Error getting maintenance state:', error)
        return {
            enabled: false,
            enabledAt: null,
            message: 'Сайт на техническом обслуживании'
        }
    }
})
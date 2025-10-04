// server/api/maintenance/state.get.ts
export default defineEventHandler(async (event) => {
    const storage = useStorage('maintenance')
    const state = await storage.getItem('maintenance:state')

    return {
        enabled: state?.enabled || false,
        enabledAt: state?.enabledAt || null
    }
})
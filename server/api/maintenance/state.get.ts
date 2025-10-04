// server/api/maintenance/state.get.ts
export default defineEventHandler(async () => {
    const storage = useStorage('maintenance')
    const state = await storage.getItem('state')

    return state || { enabled: false, enabledAt: null }
})
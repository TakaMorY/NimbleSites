// server/api/maintenance/state.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('maintenance')

    const state = {
        enabled: body.enabled,
        enabledAt: body.enabled ? Date.now() : null,
        message: body.message || 'Сайт на техническом обслуживании'
    }

    await storage.setItem('state', state)
    return state
})
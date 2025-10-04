// server/api/maintenance/state.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('maintenance')

    const state = {
        enabled: body.enabled,
        enabledAt: body.enabled ? Date.now() : null
    }

    await storage.setItem('state', state)
    return state
})
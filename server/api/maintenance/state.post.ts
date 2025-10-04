// server/api/maintenance/state.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const storage = useStorage('maintenance')

    await storage.setItem('maintenance:state', {
        enabled: body.enabled,
        enabledAt: body.enabled ? Date.now() : null
    })

    return { success: true }
})
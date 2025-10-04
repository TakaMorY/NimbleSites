// server/api/maintenance/state.post.ts
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const storage = useStorage('maintenance')

        const state = {
            enabled: Boolean(body.enabled),
            enabledAt: body.enabled ? Date.now() : null,
            message: body.message || 'Сайт на техническом обслуживании'
        }

        await storage.setItem('state', state)

        return state
    } catch (error) {
        console.error('Error setting maintenance state:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to update maintenance state'
        })
    }
})
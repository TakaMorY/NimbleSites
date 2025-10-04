// server/api/auth/state.get.ts
export default defineEventHandler(async (event) => {
    const storage = useStorage('auth')
    const state = await storage.getItem('auth:state')

    return {
        isAdmin: state?.isAdmin || false
    }
})
// plugins/init.client.ts
export default defineNuxtPlugin(() => {
    const { init: initAuth } = useAuth()
    const { init: initMaintenance } = useMaintenance()

    initAuth()
    initMaintenance()
})
export default defineNuxtRouteMiddleware((to) => {
    const { $config } = useNuxtApp()
    console.log("testing local midlware")
  })
  
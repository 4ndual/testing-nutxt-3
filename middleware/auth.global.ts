import { useAuth } from "~~/composables/useAuth"

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth()
  
  console.log("global")
})
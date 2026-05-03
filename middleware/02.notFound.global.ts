import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to) => {
// Se não encontrou a rota

if (!to.matched.length) { 
    return navigateTo('/404')
    }
})
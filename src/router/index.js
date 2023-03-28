import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import LoginPage from "@/views/Login.vue";
import RegisterPage from "@/views/Register.vue";
const routes = [
        {
            path: "/",
            name: "contactbook",
            component: ContactBook,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notfound",
            component: () => import("@/views/NotFound.vue"),
        },
        {
            path: "/contacts/:id",
            name: "contact.edit",
            component: () => import("@/views/ContactEdit.vue"),
            props: true // Truyền các biến trong $route.params vào làm props
        },
        {
            path: "/contacts/",
            name: "contact.add",
            component: () => import("@/views/ContactAdd.vue"),
        },
        {
            path: "/log-in",
            name: "login",
            component: LoginPage,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterPage,
        },
    ];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
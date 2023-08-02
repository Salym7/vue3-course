import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import PostShowPage from "@/pages/PostShowPage.vue";
import About from "@/pages/About.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/posts",
        component: PostPage,
    },
    {
        path: "/posts/:id",
        component: PostShowPage,
    },
    {
        path: "/about",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

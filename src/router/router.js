import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
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
        path: "/store",
        component: PostPageWithStore,
    },
    {
        path: "/composition",
        component: PostPageCompositionApi,
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

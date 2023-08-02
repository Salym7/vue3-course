import { createApp } from "vue";
// import { createPinia } from 'pinia'
import components from "@/components/UI";
import App from "./App.vue";
import router from "@/router/router";

const app = createApp(App);

components.forEach((component) => {
    app.component(component.name, component);
});
app.use(router);
// app.use(createPinia())

app.mount("#app");

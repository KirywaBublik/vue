import { createApp } from "vue";
import App from "@/app/App.vue";
import router from "@/app/routes/router";
import "@/app/styles/global.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

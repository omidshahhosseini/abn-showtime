import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "./assets/carousel.css";
import "./assets/navigation.css";

createApp(App).use(router).mount("#app");

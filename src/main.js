import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//admin template
import "startbootstrap-sb-admin/dist/css/styles.css";
import "startbootstrap-sb-admin/dist/js/scripts.js";

createApp(App).use(store).use(router).mount("#app");

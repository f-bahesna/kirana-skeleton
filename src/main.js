import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerModules } from "./register-modules";

import userModule from "./modules/user";

registerModules({
    user: userModule
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")
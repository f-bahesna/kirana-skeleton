import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css'

// Uncomment these if using Web3 / crypto libraries that need Node polyfills
// import process from "process";
// import { Buffer } from "buffer";
// import EventEmitter from "events";

// window.Buffer = Buffer;
// window.process = process;
// window.EventEmitter = EventEmitter;

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")

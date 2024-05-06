import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
// Emitter config
import mitt from "mitt";
const emitter = mitt();
const vueApp = createApp(App);
vueApp.directive("maxSize", (el, binding) => {
  if (binding.arg === "fontSize") {
    el.style.fontSize = binding.value + "px";
  }
  if (binding.arg === "fontWeight") {
    el.style.fontWeight = binding.value;
  }
});
vueApp.provide("emitter", emitter).use(router).mount("#app");

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>My Name {{ firstName }} {{ lastname }}</h2>
    <h2>{{ age }}</h2>
    <button @click="sayHello">Increase Age</button>
    <h1>{{ welcomUser }}</h1>
    <h3 ref="welcEl">{{ afterYears }}</h3>
    <newComponent :userName="name" :userAge="age" />
    <routercomponent />
    <emitComponent @handel-click="excuteFunction" />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import newComponent from "../components/NewComponent";
import routercomponent from "../components/RouterComponent";
import emitComponent from "../components/EmitComponent";
const firstName = ref("Mohammed");
const lastname = ref("Ziyad");
const age = ref(27);
const name = ref("Mohammed Ziyad");
function sayHello() {
  age.value++;
}
const welcEl = ref(null);
const welcomUser = computed(
  () => `Welcome ${name.value} your age is ${age.value}`
);
const afterYears = computed(
  () => `Your age will be ${age.value + 5} after 5 years`
);

//emits
const excuteFunction = () => {
  console.log("Excute Function");
};
</script>

<template>
  <div class="home">
    <img src="../assets/logo.png" alt=" " />
    <HelloWorld msg="Use Mixins with props" />
    <h1>Use watch</h1>
    <h2>Counter is : {{ counter }}</h2>
    <button @click="counter++">Counter</button>
    <h2>New value : {{ myObject.newval }} Old value : {{ myObject.oldval }}</h2>
    <button @click="myArray.push(counter)">Push Counter Value</button>
    <h2>The length of the array : {{ myArray.length }}</h2>
  </div>
</template>

<script setup>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { ref, watch } from "vue";
const counter = ref(0);
const myArray = ref([]);
const myObject = ref({ newval: 0, oldval: 0 });
// watch
watch(
  () => counter.value,
  (newval, oldval) => {
    console.log("newval: ", newval, "oldval: ", oldval);
    myObject.value.newval = newval;
    myObject.value.oldval = oldval;
  }
);
watch(
  () => myArray.value,
  (newvalue) => {
    console.log("newvalue to array: ", newvalue);
  },
  { deep: true }
);
</script>
<style scoped lang="scss">
button {
  margin-right: 10px;
}
</style>

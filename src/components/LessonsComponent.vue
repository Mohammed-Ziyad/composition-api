<template>
  <div class="emit">
    <h2>Use inject</h2>
    <h3>My Name : {{ userName }}</h3>
    <h3>My Age : {{ age }}</h3>
    <button @click="lessons('You are in lessons the advanced')">
      Advanced Lessons
    </button>
    <h2>Use life cycle hooks</h2>
    <p style="color: red">open the console and see the output</p>
    <button @click="changvalue++">show</button>
    <p style="color: red">{{ changvalue }}</p>
    <h2>Use the emitter</h2>
    <button @click="fireEmitt">Emit</button>
  </div>
</template>
<script setup>
import { inject, ref, onBeforeMount, onBeforeUpdate, onUpdated } from "vue";
const userName = inject("name");
const age = inject("age");
const lessons = inject("advancedLessons");
const changvalue = ref(0);
onUpdated(() => {
  console.log("onUpdated", changvalue.value);
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate", changvalue.value);
});
onBeforeMount(() => {
  console.log("onBeforeMount", changvalue.value);
});
const emitter = inject("emitter");
const fireEmitt = () => {
  emitter.emit("globalEmit", "emit to data");
};
</script>

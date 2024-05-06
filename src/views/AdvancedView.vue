<template>
  <div class="Advanced">
    <h1>This is an Advanced page</h1>
    <Lessons />
    <h2>{{ nameLessons }}</h2>
  </div>
</template>

<script setup>
import { ref, provide, inject, onMounted } from "vue";
import Lessons from "../components/LessonsComponent";
const userName = ref("Mohammed Ziyad");
const age = ref(27);
const nameLessons = ref("jjjjjjjjjjjjjjjjjjj");
const advancedLessons = (NameLessons) => {
  console.log("advancedLessons", NameLessons);
  nameLessons.value = NameLessons;
};
nameLessons.value = advancedLessons();
provide("name", userName.value);
provide("age", age.value);
provide("advancedLessons", advancedLessons);
//Emitter
const emitter = inject("emitter");
onMounted(() => {
  emitter.on("globalEmit", (data) => {
    console.log("the data is : ", data);
  });
});
</script>

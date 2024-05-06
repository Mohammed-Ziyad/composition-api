<template>
  <div class="emit">
    <h2>Use inject</h2>
    <h3>My Name : {{ userName }}</h3>
    <h3>My Age : {{ age }}</h3>
    <button @click="lessons('You are in lessons the advanced')">
      Advanced Lessons
    </button>
  </div>
</template>
<script setup>
import { inject } from "vue";
const userName = inject("name");
const age = inject("age");
const lessons = inject("advancedLessons");
</script>

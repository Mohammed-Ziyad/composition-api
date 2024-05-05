<template>
  <div class="emit">
    <h2>component to use emit</h2>
    <button @click="emits('handelClick')">Excut Function</button>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["handelClick"]);
</script>

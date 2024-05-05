<template>
  <div class="hello">
    <h1>component to use in another component by using props</h1>
    <h1>{{ props.userName }} , {{ props.userAge }}</h1>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
});
</script>

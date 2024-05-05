<template>
  <div class="hello">Component Router</div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
console.log("Router", router);
const route = useRoute();
console.log("Route ", route);
</script>

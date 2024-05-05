<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CustomDirective />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomDirective from "@/components/CustomDirectiveComponent.vue";

export default {
  name: "HomeView",
  components: {
    CustomDirective,
  },
};
</script>

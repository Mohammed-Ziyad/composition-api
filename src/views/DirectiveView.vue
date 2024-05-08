<template>
  <div class="directive">
    <dotlottie-player
      src="https://lottie.host/90ebd91f-0541-4908-85ad-7a69b8e737b8/nbUEsDv3Pk.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></dotlottie-player>
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
<style>
dotlottie-player {
  margin: 10px auto;
}
</style>

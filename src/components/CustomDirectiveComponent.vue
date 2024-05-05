<template>
  <div>
    <h2 v-colorize="'red'" v-maxSize="50">Custom directive</h2>
    <p>
      this text use
      <span
        v-colorize="'red'"
        v-maxSize:fontSize="20"
        v-maxSize:fontWeight="'bold'"
      >
        custom directive
      </span>
      change color , font size and font weight globlely and locally
    </p>
  </div>
</template>
<script setup>
const vColorize = {
  mounted: (el, data) => {
    console.log("le ", el);
    console.log("data ", data);
    el.style.color = data.value;
  },
};
</script>

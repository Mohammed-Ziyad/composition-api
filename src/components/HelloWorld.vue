<template>
  <div class="hello">
    <h1>{{ props.msg }}</h1>
    <h2>Counter Is : {{ counter }}</h2>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import couterFupropsnction from "../mixins/counter";
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
});
const { counter, increase, decrease } = couterFupropsnction();
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin-right: 10px;
}
</style>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/directive">Directive</router-link> |
    <router-link to="/lessons">Advanced Lessons</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  background-color: #41b883;
  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>

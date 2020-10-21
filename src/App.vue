<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layouts/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: max-content;
}
</style>

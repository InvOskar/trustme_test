<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 0 10%;
  @media (max-width: 1300px) {
    padding: 0;
  }
}
</style>

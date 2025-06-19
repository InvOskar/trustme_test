<template>
  <div class="home-view">
    <TheHeader />
    <ListOfAppartments />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ListOfAppartments from "@/components/ListOfAppartments.vue";

export default {
  components: { TheHeader, ListOfAppartments },
};
</script>

<style></style>

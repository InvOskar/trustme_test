<template>
  <div class="apartment-view">
    <ListOfApartments :list="sortedList" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ListOfApartments from "@/components/ListOfApartments.vue";
import appartments from "@/apartments.json";
export default {
  components: { TheHeader, ListOfApartments },
  data() {
    return {
      appartment: [],
    };
  },
  mounted() {
    this.appartment = appartments;
  },
};
</script>

<style lang="scss" scoped></style>

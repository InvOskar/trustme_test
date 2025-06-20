<template>
  <div class="list-of-appartments">
    <ApartmentCard v-for="item in list" :key="item.id" :apartment="item" />
  </div>
</template>

<script>
import ApartmentCard from "./ApartmentCard.vue";
export default {
  components: {
    ApartmentCard,
  },
  props: {
    list: Array,
  },
};
</script>

<style scoped lang="scss">
.list-of-appartments {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px 0;
  gap: 24px;
}
</style>

<template>
  <div class="home-view">
    <FiltersBlock @update:filters="onFiltersChange" />
    <ListOfApartments :list="sortedList" />
  </div>
</template>

<script>
import ListOfApartments from "@/components/ListOfApartments.vue";
import FiltersBlock from "@/components/FiltersBlock.vue";
import apartments from "@/apartments.json";

export default {
  components: { FiltersBlock, ListOfApartments },
  data() {
    return {
      filters: {
        selectedRooms: [],
        areaFrom: null,
        areaTo: null,
        searchAddress: "",
      },
      apartments: [],
    };
  },
  computed: {
    sortedList() {
      return this.apartments.filter((apartment) => {
        // фильтр по комнатам
        if (
          this.filters.selectedRooms.length > 0 &&
          !this.filters.selectedRooms.includes(apartment.rooms)
        ) {
          return false;
        }

        // фильтр по площади
        if (
          this.filters.areaFrom !== null &&
          apartment.area < Number(this.filters?.areaFrom)
        ) {
          return false;
        }

        if (
          this.filters.areaTo !== null &&
          apartment.area > Number(this.filters.areaTo)
        ) {
          return false;
        }

        // фильтр по адресу
        if (
          this.filters.searchAddress.trim() !== "" &&
          !apartment.address
            .toLowerCase()
            .includes(this.filters.searchAddress.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
    },
  },
  mounted() {
    this.apartments = apartments;
  },
  methods: {
    onFiltersChange(newFilters) {
      this.filters = newFilters;
    },
  },
};
</script>

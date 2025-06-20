<template>
  <div class="filters-block">
    <div class="filters-block-item">
      <p class="filters-block-item-title">Поиск по адресу</p>
      <div class="filters-block-item-area">
        <AInputSearch
          v-model:value="searchAddress"
          allowClear
          placeholder="Адрес"
          style="width: 400px"
          size="large"
          @search="emitFilters"
        />
      </div>
    </div>
    <div class="filters-block-item">
      <p class="filters-block-item-title">Количество комнат</p>
      <ASelect
        v-model:value="selectedRooms"
        mode="multiple"
        placeholder="Комнатность"
        style="width: 218px"
        size="large"
        @change="emitFilters"
      >
        <ASelectOption v-for="option in roomsOptions" :key="option">
          {{ option }}
        </ASelectOption>
      </ASelect>
    </div>
    <div class="filters-block-item">
      <p class="filters-block-item-title">Площадь</p>
      <div class="filters-block-item-area">
        <AInput
          :value="areaFrom"
          placeholder="От"
          style="width: 50px"
          size="large"
          @keypress="onKeyPressNumber"
          @input="onInputAreaFrom"
        />
        -
        <AInput
          :value="areaTo"
          placeholder="До"
          style="width: 50px"
          size="large"
          @keypress="onKeyPressNumber"
          @input="onInputAreaTo"
        />
        м²
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:filters"],
  data() {
    return {
      selectedRooms: [],
      areaFrom: null,
      areaTo: null,
      searchAddress: "",
      roomsOptions: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    onKeyPressNumber(e) {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    },
    emitFilters() {
      this.$emit("update:filters", {
        selectedRooms: this.selectedRooms,
        areaFrom: this.areaFrom,
        areaTo: this.areaTo,
        searchAddress: this.searchAddress,
      });
    },
    onInputAreaFrom(e) {
      if (e.target.value.length) this.areaFrom = e.target.value;
      else this.areaFrom = null;
      this.emitFilters();
    },
    onInputAreaTo(e) {
      if (e.target.value.length) this.areaTo = e.target.value;
      else this.areaTo = null;
      this.emitFilters();
    },
  },
};
</script>

<style scoped lang="scss">
.filters-block {
  margin-top: 24px;
  padding: 20px;
  border-radius: 16px;
  background: #f5f2f2;
  display: flex;
  gap: 24px;

  @media (max-width: 860px) {
    flex-direction: column;
  }
}
</style>

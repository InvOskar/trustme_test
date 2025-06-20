<template>
  <div class="apartments-card">
    <div class="apartments-card-image">
      <AImage :src="apartment.image" :height="160" />
    </div>
    <div class="apartments-card-info">
      <p class="apartments-card-title">{{ apartment.address }}</p>
      <div class="apartments-card-info-items">
        <div class="apartments-card-info-item">
          <p class="apartments-card-info-item-title">Площадь</p>
          <p class="apartments-card-info-item-data">{{ apartment.area }} м²</p>
        </div>
        <div class="apartments-card-info-item">
          <p class="apartments-card-info-item-title">Комнат</p>
          <p class="apartments-card-info-item-data">{{ apartment.rooms }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apartment: Object,
  },
};
</script>

<style scoped lang="scss">
.apartments-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background: #f5f2f2;
  cursor: pointer;

  &-image {
    display: flex;
    justify-content: center;
    width: 300px;
  }
  &-info {
    &-items {
      display: flex;
      justify-content: center;
      padding-top: 16px;
    }
    &-item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      padding: 12px 24px;

      &:not(:last-child) {
        border-right: 1px solid #8e8e91;
      }
      &-title {
        font-size: 14px;
        color: #6e6e73;
      }
      &-data {
        font-size: 18px;
        color: #33333d;
        font-weight: 700;
      }
    }
  }
  &-title {
    padding-top: 24px;
    font-size: 18px;
    color: #33333d;
    font-weight: 700;
    text-align: center;
  }
}
</style>

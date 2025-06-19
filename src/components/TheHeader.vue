<template>
  <div class="header">
    <img class="header-logo" src="@/assets/logo_trustme.png" />
    <div class="header-links">
      <p>+7 777 777 77 77</p>
      <p>Подать объявление</p>
      <p>
        <UserOutlined />
        Войти/Регистрация
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.header {
  background: #f5f2f2;
  padding: 0 10%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  &-logo {
    height: 90%;
  }
  &-links {
    display: flex;
    gap: 24px;
    & > p {
      color: #5956e0;
      &:hover {
        cursor: pointer;
        color: #0d0b97;
      }
    }
  }
}
</style>

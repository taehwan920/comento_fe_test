<template>
  <aside class="login">
    <button>로그인</button>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
  width: 235px;
  height: 100%;
  margin-right: 40px;
}

.login > button {
  width: 100%;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: $comento-green;
  color: #fff;
  font-size: 22px;
  line-height: 1.14;
  text-align: center;
}
</style>
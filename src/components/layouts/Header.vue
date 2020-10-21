<template>
  <header class="submitHeader">
    <span class="submitBox">[제출일] 양태환</span>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.submitHeader {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.07);
}
.submitBox {
  width: 100%;
  max-width: 1140px;
  display: inline-block;
}
</style>
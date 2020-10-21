<template>
  <main>
    <AsidePC />
  </main>
</template>

<script>
import AsidePC from "../components/layouts/AsidePC";
export default {
  components: {
    AsidePC,
  },
};
</script>

<style lang="scss">
main {
  width: max-content;
  max-width: 1140px;
  height: max-content;
  margin-top: 70px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
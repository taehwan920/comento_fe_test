<template>
  <main>
    <div class="contentWrapper">
      <AsidePC />
    </div>
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
  height: max-content;
  margin-top: 70px;
  padding-top: 50px;
}
</style>
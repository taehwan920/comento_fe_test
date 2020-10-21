<template>
  <main>
    <AsidePC />
    <Feed />
  </main>
</template>

<script>
import AsidePC from "../components/layouts/AsidePC";
import Feed from "../components/contents/Feed";

export default {
  components: {
    AsidePC,
    Feed,
  },
};
</script>

<style lang="scss">
main {
  width: 100%;
  max-width: 1140px;
  height: max-content;
  margin-top: 70px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
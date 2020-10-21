<template>
  <section class="feed">
    <FeedHeader />
    <article></article>
    <article></article>
  </section>
</template>

<script>
import FeedHeader from "./feed/FeedHeader";

export default {
  components: {
    FeedHeader,
  },
};
</script>

<style lang="scss">
.feed {
  width: calc(100% - 275px);
  max-width: 865px;
  height: max-content;

  display: flex;
  flex-direction: column;
}
</style>
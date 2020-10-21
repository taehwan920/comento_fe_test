<template>
  <section class="feed">
    <FeedHeader />
    <FeedContent />
    <article></article>
  </section>
</template>

<script>
import FeedHeader from "./feed/FeedHeader";
import FeedContent from "./feed/FeedContent";

export default {
  components: {
    FeedHeader,
    FeedContent,
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
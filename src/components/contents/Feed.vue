<template>
  <section class="feed">
    <FeedHeader />
    <FeedContent />
    <FeedAd />
  </section>
</template>

<script>
import FeedHeader from "./feed/FeedHeader";
import FeedContent from "./feed/FeedContent";
import FeedAd from "./feed/FeedAd";

export default {
  components: {
    FeedHeader,
    FeedContent,
    FeedAd,
  },
  created() {
    const store = this.$store;
    store.commit("fetchFeedContents");
    store.commit("fetchFeedAds");
    console.log(store);
    console.log(store.getters.getFeedContents);
    console.log(store.getters.getFeedAds);
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

.item-container {
  width: 100%;
  height: max-content;
  border: solid 1px $weak-gray;
  border-radius: 5px;
  margin-bottom: 30px;
}
</style>
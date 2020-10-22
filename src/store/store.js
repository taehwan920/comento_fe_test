import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchEndPoint: `https://problem.comento.kr`,
    feedItemCache: [],
    fetchedNumberOfPages: 0,
    fetchedFeedContents: [],
    fetchedFeedAds: [],
  },
  mutations: {
    fetchFeedContents: async (state) => {
      const url = `https://problem.comento.kr/api/`;

      const categoryUrl = `category`;

      const fetchedCategory = await fetch(url + categoryUrl, {
        headers: { 'Accept': 'application/json' },
      }).then(response => response.json());

      const categoryQS = fetchedCategory.category.map(item => {
        return `category[]=${item.id}`;
      }).join('&');

      const contentUrl = `list?page=1&ord=asc&${categoryQS}&limit=10`;

      const fetchedContent = await fetch(url + contentUrl, {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      }).then(response => response.json());

      return state.fetchedFeedContents = fetchedContent.data;
    },
    fetchFeedAds: async (state) => {
      const adPage = 1;
      const adLimit = 5;

      const url = `https://problem.comento.kr/api/ads?page=${adPage}&limit=${adLimit}`;

      const fetchedAds = await fetch(url, {
        headers: { 'Accept': 'application/json' },
      }).then(response => response.json());

      return state.fetchedFeedAds = fetchedAds.data;
    },
  },
  getters: {
    getFeedContents: (state) => {
      return state.fetchedFeedContents;
    },
    getFeedAds: (state) => {
      return state.fetchedFeedAds;
    },
  },
  actions: {
  },
  modules: {
  }
})

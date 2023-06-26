<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components:{
    AppHeader,
    AppMain
  },
  data() {
    return {
      axios,
      store
    }
  },
  methods: {
    searchFilm(){
      let newApiUrl = store.baseApiURL;
      newApiUrl += `&query=${store.findString}`;
      this.axiosRequest(newApiUrl);
      store.currentApiURL = newApiUrl;
      console.log(store.moviesArray);
    },
    axiosRequest(myUrl){
      axios.get(myUrl).then((resp) => {
        store.moviesArray = resp.data.results;
        store.currentPage = resp.data.page;
        store.totalPage = resp.data.total_pages;
      })
    }
  },
}
</script>
<template lang="">
  <div class="background">
    <AppHeader @cerca="searchFilm()"/>
    <AppMain />
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss';
  .background{
    background-color: gray;
  }
</style>
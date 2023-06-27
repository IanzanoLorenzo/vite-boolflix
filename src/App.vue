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
    search(){
      store.caricaMovie = false;
      store.caricaTV = false;
      let newApiUrlMovie = store.baseApiURLHead + store.movie + store.apiKey + `&query=${store.findString}`;
      let newApiUrlTV = store.baseApiURLHead + store.TV + store.apiKey + `&query=${store.findString}`
      this.axiosRequestFilm(newApiUrlMovie);
      store.currentApiURLMovie = newApiUrlMovie;
      this.axiosRequestTV(newApiUrlTV);
      store.currentApiURLTV = newApiUrlTV;
    },
    axiosRequestFilm(myUrl){
      axios.get(myUrl).then((resp) => {
        store.caricaMovie = false
        console.log(store.caricaMovie)
        store.moviesArray = resp.data.results;
        store.moviesCurrentPage = resp.data.page;
        store.moviesTotalPage = resp.data.total_pages;
        store.caricaMovie = true
        console.log(store.caricaMovie)
      })
    },
    axiosRequestTV(myUrl){
      axios.get(myUrl).then((resp) => {
        store.caricaTV = false
        console.log(store.caricaTV)
        store.TVArray = resp.data.results;
        store.TVCurrentPage = resp.data.page;
        store.TVTotalPage = resp.data.total_pages;
        store.caricaTV = true
        console.log(store.caricaTV)
      })
    },
    nextPageFilm(){
      store.caricaMovie = false
      store.moviesCurrentPage += 1
      let myUrl = store.currentApiURLMovie + `&page=${store.moviesCurrentPage}`
      this.axiosRequestFilm(myUrl)
    },
    previousPageFilm(){
      store.caricaMovie = false
      store.moviesCurrentPage -= 1
      let myUrl = store.currentApiURLMovie + `&page=${store.moviesCurrentPage}`
      this.axiosRequestFilm(myUrl)
    },
    nextPageTV(){
      store.caricaTV = false
      store.TVCurrentPage += 1
      let myUrl = store.currentApiURLTV + `&page=${store.TVCurrentPage}`
      this.axiosRequestTV(myUrl)
    },
    previousPageTV(){
      store.caricaTV = false
      store.TVCurrentPage -= 1
      let myUrl = store.currentApiURLTV + `&page=${store.TVCurrentPage}`
      this.axiosRequestTV(myUrl)
    },
  },
}
</script>
<template lang="">
  <div class="background">
    <AppHeader @cerca="search()" />
    <AppMain @avantiFilm="nextPageFilm()" @indietroFilm="previousPageFilm()" @avantiTV="nextPageTV()" @indietroTV="previousPageTV()"/>
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss';
  .background{
    background-color: gray;
    min-height: 100vh;
    max-width: 100%;
  }
</style>
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
  mounted(){
      this.search() 
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=6d56afffca668a7f4e4eaa8db93c6b94&language=it').then((risp)=>{
        store.generiArrayMovies = risp.data.genres
      })
      axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=6d56afffca668a7f4e4eaa8db93c6b94&language=it').then((risp)=>{
        store.generiArrayTV = risp.data.genres
      })
  },
  methods: {
    search(){
      let newApiUrlMovie, newApiUrlTV;
      if (store.findString === ''){
        store.caricaMovie = false;
        store.caricaTV = false;
        newApiUrlMovie = store.baseApiURLHeadTrend + store.movie + '/week' + store.apiKey;
        newApiUrlTV = store.baseApiURLHeadTrend + store.TV + '/week' + store.apiKey;
      }
      else{
        store.caricaMovie = false;
        store.caricaTV = false;
        newApiUrlMovie = store.baseApiURLHeadSearch + store.movie + store.apiKey + `&query=${store.findString}`;
        newApiUrlTV = store.baseApiURLHeadSearch + store.TV + store.apiKey;
        newApiUrlTV += `&query=${store.findString}`
      }
      this.axiosRequestFilm(newApiUrlMovie);
      store.currentApiURLMovie = newApiUrlMovie;
      this.axiosRequestTV(newApiUrlTV);
      store.currentApiURLTV = newApiUrlTV;
    },
    axiosRequestFilm(myUrl){
      axios.get(myUrl).then((resp) => {
        store.caricaMovie = false;
        store.moviesArray = resp.data.results;
        store.moviesCurrentPage = resp.data.page;
        store.moviesTotalPage = resp.data.total_pages;
        store.caricaMovie = true;
      })
    },
    axiosRequestTV(myUrl){
      axios.get(myUrl).then((resp) => {
        store.caricaTV = false;
        store.TVArray = resp.data.results;
        store.TVCurrentPage = resp.data.page;
        store.TVTotalPage = resp.data.total_pages;
        store.caricaTV = true;
      })
    },
    nextPageFilm(){
      store.caricaMovie = false;
      store.moviesCurrentPage += 1;
      let myUrl = store.currentApiURLMovie + `&page=${store.moviesCurrentPage}`;
      this.axiosRequestFilm(myUrl);
    },
    previousPageFilm(){
      store.caricaMovie = false;
      store.moviesCurrentPage -= 1;
      let myUrl = store.currentApiURLMovie + `&page=${store.moviesCurrentPage}`;
      this.axiosRequestFilm(myUrl);
    },
    nextPageTV(){
      store.caricaTV = false;
      store.TVCurrentPage += 1;
      let myUrl = store.currentApiURLTV + `&page=${store.TVCurrentPage}`;
      this.axiosRequestTV(myUrl);
    },
    previousPageTV(){
      store.caricaTV = false;
      store.TVCurrentPage -= 1;
      let myUrl = store.currentApiURLTV + `&page=${store.TVCurrentPage}`;
      this.axiosRequestTV(myUrl);
    }
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
    background-color: rgb(36, 36, 36);
    min-height: 100vh;
    max-width: 100%;
    padding-bottom: 50px;
  }
</style>
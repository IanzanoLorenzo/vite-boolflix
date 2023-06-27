import { reactive } from 'vue';

export const store = reactive({
    findString : '',
    baseApiURLHead: 'https://api.themoviedb.org/3/search/',
    apiKey: '?api_key=6d56afffca668a7f4e4eaa8db93c6b94',
    //movies
    caricaMovie: true,
    movie : 'movie',
    currentApiURLMovie: '',
    moviesArray: [],
    moviesCurrentPage: 0,
    moviesTotalPage: 0,
    //series
    caricaTV: true,
    TV: 'tv',
    currentApiURLTV: '',
    TVArray: [],
    TVCurrentPage: 0,
    TVTotalPage: 0
})
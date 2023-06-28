import { reactive } from 'vue';

export const store = reactive({
    findString : '',
    baseApiURLHeadSearch: 'https://api.themoviedb.org/3/search/',
    baseApiURLHeadTrend: 'https://api.themoviedb.org/3/trending/',
    apiKey: '?api_key=6d56afffca668a7f4e4eaa8db93c6b94&language=it',
    //movies
    findGenreMovies:'',
    generiArrayMovies:[],
    caricaMovie: true,
    movie : 'movie',
    currentApiURLMovie: '',
    moviesArray: [],
    moviesCurrentPage: 0,
    moviesTotalPage: 0,
    //series
    findGenreTV:'',
    generiArrayTV:[],
    caricaTV: true,
    TV: 'tv',
    currentApiURLTV: '',
    TVArray: [],
    TVCurrentPage: 0,
    TVTotalPage: 0
})
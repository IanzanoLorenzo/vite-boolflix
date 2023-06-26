import { reactive } from 'vue';

export const store = reactive({
    findString : '',
    baseApiURL: 'https://api.themoviedb.org/3/search/movie?api_key=6d56afffca668a7f4e4eaa8db93c6b94',
    currentApiURL: '',
    moviesArray: [],
    currentPage: 0,
    totalPage: 0
})
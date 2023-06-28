<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    props:{
        movie: Object
    },
    methods:{
        nstar(){
            return Math.ceil(this.movie.vote_average / 2)
        }
    }
}
</script>
<template lang="">
    <div class="card">
        <div class="card-img">
            <img class="poster" :src="movie.poster_path === null ? '/Image_not_available.png' : 'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
        </div>
        <ul class="overlay">
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>
                Lingua originale:
            </li>
            <li>
                <img class="flag" :src="`/src/assets/${movie.original_language.toUpperCase()}.svg`" :alt="movie.original_language">
            </li>
            <li>
                Voto: {{ Math.ceil(movie.vote_average / 2) }} 
                <i class="fa-solid fa-star" v-for="point in nstar()" ></i>
                <i class="fa-regular fa-star" v-for="point in 5 - nstar()"></i>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/cardstyle' as *;
</style>
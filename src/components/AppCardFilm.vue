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
        // FUNZIONE PER CONTARE LE STELLE DEL VOTO
        nstar(){
            return Math.ceil(this.movie.vote_average / 2)
        }
    }
}
</script>
<template lang="">
    <div class="card">
        <!-- POSTER CARD -->
        <div class="card-img">
            <img class="poster" :src="movie.poster_path === null ? '/Image_not_available.png' : 'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
        </div>
        <!-- OVERLAY CARD -->
        <ul class="overlay">
            <li>
                <strong>Titolo</strong>: {{ movie.title }}
            </li>
            <li>
                <strong>Titolo originale</strong>: {{ movie.original_title }}
            </li>
            <li>
                <strong>Lingua originale</strong>:
            </li>
            <li>
                <img class="flag" :src="`/src/assets/${movie.original_language.toUpperCase()}.svg`" :alt="movie.original_language">
            </li>
            <li>
                <strong>Voto</strong>: {{ Math.ceil(movie.vote_average / 2) }} 
                <i class="fa-solid fa-star" v-for="point in nstar()" ></i>
                <i class="fa-regular fa-star" v-for="point in 5 - nstar()"></i>
            </li>
            <li>
                <strong>Overview</strong>: {{ movie.overview }}
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/cardstyle' as *;
</style>
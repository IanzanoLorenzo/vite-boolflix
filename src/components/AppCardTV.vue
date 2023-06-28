<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    props:{
        serie: Object
    },
    methods:{
        nstar(){
            return Math.ceil(this.serie.vote_average / 2)
        }
    }
}
</script>
<template lang="">
    <div class="card">
        <!-- IMMAGINE POSTER CARD -->
        <div class="card-img">
            <img class="poster" :src="serie.poster_path === null ? '/Image_not_available.png' : 'https://image.tmdb.org/t/p/original' + serie.poster_path" alt="">
        </div>
        <!-- OVERLAY CARD -->
        <ul class="overlay">
            <li>Titolo: {{ serie.name }}</li>
            <li>Titolo originale: {{ serie.original_name }}</li>
            <li>
                Lingua originale:
            </li>
            <li>
                <img class="flag" :src="`/src/assets/${serie.original_language.toUpperCase()}.svg`" :alt="serie.original_language.toUpperCase()">
            </li>
            <li>
                Voto: {{ Math.ceil(serie.vote_average / 2) }} 
                <i class="fa-solid fa-star" v-for="point in nstar()" ></i>
                <i class="fa-regular fa-star" v-for="point in 5 - nstar()"></i>
            </li>
            <li>
                Overview: {{ serie.overview }}
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/cardstyle' as *;
</style>
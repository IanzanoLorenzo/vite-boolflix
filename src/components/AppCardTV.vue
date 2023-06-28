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
        <div class="card-img">
            <img class="poster" :src="serie.poster_path === null ? '/Image_not_available.png' : 'https://image.tmdb.org/t/p/original' + serie.poster_path" alt="">
        </div>
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
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .flag{
        width: 60px;
        height: 40px;
    }
    .poster{
        height: 100%;
        max-width: 100%;
    }
    .card{
        height: 400px;
        background-color: gray;
        position: relative;
        &:hover .overlay{
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    }

    .card-img{
        height: 100%;
        width: 100%;
    }
    .overlay{
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.808);
        color: white;
        display: none;
        padding: 10px;
        ul{
            margin: 0;
        }
        li{
            list-style: none;
            margin: 10px 0;
        }
    }
    i{
        color: yellow;
    }
</style>
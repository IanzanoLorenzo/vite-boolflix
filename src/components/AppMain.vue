<script>
import AppCardFilm from './AppCardFilm.vue';
import AppCardTV from './AppCardTV.vue';
import { store } from '../store';
export default {
    components:{
        AppCardFilm,
        AppCardTV
    },
    data() {
        return {
            store
        }
    },
};
</script>
<template lang="">
    <div>
        <ul class="row"> 
            <li>
                <h2>Movies</h2>
                <div>
                    <button :class="store.moviesCurrentPage > 1 ? 'btn-primary' : 'hide btn-secondary'" class="btn" @click="store.moviesCurrentPage > 1 ? $emit('indietroFilm'): ''">Indietro</button>
                    <span class="text-light">Movies : page {{store.moviesCurrentPage}} of {{store.moviesTotalPage}}</span>
                    <button :class="store.moviesCurrentPage < store.moviesTotalPage ? 'btn-primary' : 'hide btn-secondary'" class="btn" @click="store.moviesCurrentPage < store.moviesTotalPage ? $emit('avantiFilm') : ''">Avanti</button>
                </div>
            </li>
            <li class="col-12 mt-4">
                <ul class="row flex-row flex-nowrap">
                    <li class="col-2" v-for="(movie, index) in store.moviesArray" :key="index">
                        <AppCardFilm :movie="movie"/>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="row"> 
            <li>
                <h2>Series</h2>
                <div>
                    <button :class="store.TVCurrentPage > 1 ? 'btn-primary' : 'hide btn-secondary'" class="btn" @click="store.TVCurrentPage > 1 ? $emit('indietroTV') :''">Indietro</button>
                    <span class="text-light">Series : page {{store.TVCurrentPage}} of {{store.TVTotalPage}}</span>
                    <button :class="store.TVCurrentPage < store.TVTotalPage ? 'btn-primary' : 'hide btn-secondary'" class="btn" @click="store.TVCurrentPage < store.TVTotalPage ? $emit('avantiTV') : ''">Avanti</button>
                </div>
            </li>
            <li class="col-12 mt-4">
                <ul class="row flex-row flex-nowrap">
                    <li class="col-2" v-for="(serie, index) in store.TVArray" :key="index">
                        <AppCardTV :serie="serie"/>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
li{
    list-style: none;
    margin: 0;
}
ul{
    padding: 0;
}
span{
    width: 190px;
    display: inline-block;
    text-align: center;
}
.row{
    min-height: 450px;
    margin: 0;
    overflow-x: auto;
    max-width: 100%;
    scroll-behavior: smooth;
    &::-webkit-scrollbar{
        height: 10px;
        color: black;
    }
    &::-webkit-scrollbar-button{
        background-color: black;
        color: gray;
    }
    &::-webkit-scrollbar-thumb{
        background-color: black;
        &:hover{
            cursor: pointer;
        }
    }
    &::-moz-scrollbar{
        height: 20px;
        color: black;
    }
    &::-moz-scrollbar-button{
        background-color: black;
        color: gray;
    }
    &::-moz-scrollbar-thumb{
        background-color: black;
    }
}


    
</style>
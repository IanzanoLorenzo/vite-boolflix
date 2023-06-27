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
    }
}
</script>
<template lang="">
    <div class="card">
        Titolo: {{ movie.title }} <br>
        Titolo originale: {{ movie.original_title }} <br>
        Lingua originale: {{ movie.original_language }} <br>
        Voto: {{ Math.round(movie.vote_average / 2) }} 
    </div>
</template>
<style lang="">
    
</style>
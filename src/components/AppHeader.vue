<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
};
</script>
<template lang="">
    <nav>
        <div class="row align-items-center justify-content-between w-100">
            <div class="col-auto">
                <a href=""><img src="/boolflix-logo.png" alt=""></a>
            </div>
            <div class="col-auto">
                <!-- <label class="mx-3" for="genereFilm">Film</label>
                <select id="genereFilm" v-model="store.findGenreMovies">
                    <option value="">Nessun genere</option>
                    <option v-for="(genere, index) in store.generiArrayMovies" :key="index" :value="genere.id">{{ genere.name }}</option>
                </select>
                <label class="ms-3" for="genereTV">Series</label>
                <select class="ms-3" id="genereTV" v-model="store.findGenreTV">
                    <option value="">Nessun genere</option>
                    <option v-for="(genere, index) in store.generiArrayTV" :key="index" :value="genere.id">{{ genere.name }}</option>
                </select> -->
                <input class="mx-3" type="text" id="stringSearching" v-model="store.findString" @keyup.enter="$emit('cerca')">
                <button class="btn btn-primary mx-3" @click="$emit('cerca')">Search</button>
            </div>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
    nav{
        height: 100px;
        display: flex;
        align-items: center;
        background-color: black;
        color: red;
    }
    img{
        height: 50px;
    }
</style>
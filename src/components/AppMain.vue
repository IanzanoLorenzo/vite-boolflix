<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    components:{
        AppCard
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div>
        <ul>
            <li v-for="(movie, index) in store.moviesArray" :key="index">
                <AppCard :movie="movie"/>
            </li>
        </ul>
    </div>
</template>
<style lang="">
    
</style>
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
        {{ movie.title }}
    </div>
</template>
<style lang="">
    
</style>
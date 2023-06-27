<script>
import { store } from '../store'
export default {
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="d-flex align-items-center justify-content-end">
        <button v-show="store.currentPage > 1" class="btn btn-primary" @click="$emit('indietro')">Indietro</button>
        <span> page {{store.currentPage}} of {{store.totalPage}}</span>
        <button v-show="store.currentPage < store.totalPage" class="btn btn-primary" @click="$emit('avanti')">Avanti</button>
        <input type="text" name="" id="" v-model="store.findString" @keyup.enter="$emit('cerca')">
        <button class="btn btn-primary mx-3" @click="$emit('cerca')">Search</button>
    </div>
</template>
<style lang="">
    
</style>
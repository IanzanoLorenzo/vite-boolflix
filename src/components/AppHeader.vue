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
        <span> page {{store.currentPage}} of {{store.totalPage}}</span>
        <input type="text" name="" id="" v-model="store.findString">
        <button class="btn btn-primary mx-3" @click="$emit('cerca')">Search</button>
    </div>
</template>
<style lang="">
    
</style>
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
    <nav>
        <div class="d-flex align-items-center justify-content-end">
            <div class="col-auto">
                <input type="text" name="" id="" v-model="store.findString" @keyup.enter="$emit('cerca')">
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
    }
</style>
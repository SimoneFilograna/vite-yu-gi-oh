<script>
    import { store, fillCard } from "../store";

    export default{
        data(){
            return {
                store
            }
        },
        mounted(){
            fillCard()
        }
    }
</script>

<template>
    <div class="card-container">
        <div class="row row-cols-5">
            <div class="col"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
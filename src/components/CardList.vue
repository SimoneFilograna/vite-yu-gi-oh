<script>
    import BasicCard from "../components/BasicCard.vue";
    import { store, fillCard } from "../store";

    export default{
        components: {
            BasicCard,
        },
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
        <div class="row row-cols-5 g-4">
            <div class="col" v-for="singleCard in store.cardArray">
                <BasicCard :cardObj="singleCard"></BasicCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
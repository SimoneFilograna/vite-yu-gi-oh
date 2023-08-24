<script>
    import SelectionFilter from "../components/selectionFilter.vue"
    import BasicCard from "../components/BasicCard.vue";
    import { store, fillCard } from "../store";

    export default{
        components: {
            BasicCard,
            SelectionFilter,
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

        <SelectionFilter></SelectionFilter>

        <div class="row row-cols-5 g-4">
            <div class="col" v-for="singleCard in store.cardArray">
                <BasicCard :cardObj="singleCard"></BasicCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-container{
        background-color: white;
        padding: 3rem 2.5rem;
        border-radius: 10px;
    }
</style>
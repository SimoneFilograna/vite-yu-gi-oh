<script>
    import SelectionFilter from "../components/selectionFilter.vue"
    import BasicCard from "../components/BasicCard.vue";
    import { store, fillCard, filteredCard } from "../store";

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
            filteredCard()
        }
    }
</script>

<template>

    <SelectionFilter :archObj="store.archArray" class="pb-3" ></SelectionFilter>

    <div class="card-container">
        <div class="card-finded">
            <p class="number-finded">Founded Card</p>
        </div>

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
        padding: 1rem 2.5rem;
        border-radius: 10px;

        .number-finded{
            background-color: black;
            color: white;
            padding: 1rem;
            border-radius: 10px;
        }
    }
</style>
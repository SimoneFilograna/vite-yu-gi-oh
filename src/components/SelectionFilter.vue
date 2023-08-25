<script>
    import { fillArch, filteredCard } from "../store"

    export default{
        props:{
            archObj: {
                type: Object,
                required: true
            }
        },

        data(){
            return{
                selection: ""
            }
        },

        methods:{
            filteredCard
        },

        mounted(){
            fillArch()
        }
    }
</script>

<template>
    <div class="select-container">
        <select class="form-select" v-model="selection" @change="filteredCard(selection)">
            <option value="" disabled selected> Select Archetype </option>
            <option v-for="singleArch in archObj">{{singleArch.archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .form-select{
        width: 20%;
    }
</style>
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
            // selectReader(){
            //     console.log(this.selection)
            //     this.$emit("newArch", this.selection)
            // },
            filteredCard

        },

        mounted(){
            fillArch()
        }
    }
</script>

<template>
    <div class="select-container">
        <select class="form-select" v-model="selection" @click="filteredCard(selection)">
            <option value="" disabled selected hidden> Select Archetype </option>
            <option v-for="singleArch in archObj">{{singleArch.archetype_name}}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
    .form-select{
        width: 20%;
    }
</style>
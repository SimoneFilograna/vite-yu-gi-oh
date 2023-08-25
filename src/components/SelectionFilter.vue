<script>
    import { fillArch } from "../store"

    export default{
        props:{
            archObj: {
                type: Object,
                required: true
            }
        },

        data(){
            return{
                selection: null
            }
        },

        methods:{
            selectReader(){
                console.log(this.selection)
                this.$emit("newArch", this.selection)
            }
        },

        mounted(){
            fillArch()
        }
    }
</script>

<template>
    <div class="select-container">
        <select class="form-select" v-model="selection" @change="selectReader">
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
import { reactive } from 'vue';
import axios from "axios";

export const store = reactive({ 
    cardArray:[],
    archArray:[],
    selection: "",
})


export function fillCard(){
    const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0";
    axios.get(url).then((response)=>{
        store.cardArray = response.data.data
        console.log("funziono")
    })
}

export function fillArch(){
    let url = "https://db.ygoprodeck.com/api/v7/archetypes.php"
    axios.get(url).then((response)=>{
        store.archArray = response.data;
        console.log("funziono arch")
    })
}

export function filteredCard(selection){
    if( selection === "" || selection === undefined){
        console.log(selection)
        fillCard()
    } else {
        console.log(selection)
        store.selection = selection;
        let url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${selection}`
        axios.get(url).then((response)=>{
            store.cardArray = response.data.data
        })
    }
}


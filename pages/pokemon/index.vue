<template>
<div class="flex flex-wrap">
 <Card v-for="pokemon, i in data"  :pokemon="{...pokemon,id:i+1}"/>
</div>
</template>
<script setup lang="ts">
// definePageMeta({
//   middleware: ["test"]
//   // or middleware: 'auth'

// import { useCounter } from '~~/store/counter';

// // })
// const counter=  useCounter()


const {data}:any= await useFetch("/api/pokeapi")
// console.log(data)
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
// const sameCounter = useState('counter')
// const hello: string = "hellonuxt"
//   console.log("XDDEFWRGTHYUK<UHTGRFDS")
//   const {data}= await useBase("pokemon",{})
//   console.log(data.value.results)
</script>

 

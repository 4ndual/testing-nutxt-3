<template>
  <div v-for="pokeinfo, i in Object.keys(data)">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{pokeinfo.slice(0,1).toUpperCase() + pokeinfo.slice(1)}}</h5>
    <p v-if="typeof data[pokeinfo] =='string'" > {{data[pokeinfo]  }}</p>
    <div v-else >
      <ul v-for="pokedata in data[pokeinfo]">
        <li>{{ pokedata }}</li>

      </ul>
    </div>
 </div>
</template>
<script setup lang="ts">
  const {id} = useRoute().params

  const {data}:any= await useFetch("/api/pokeapi/"+id)
console.log(data)
</script>
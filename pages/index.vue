<template>

    <div>
        <h1>
            {{ hello }}
        </h1>
        <nuxt-img src="Logo.svg" />
    </div>
</template>
<script setup lang="ts">

const hello: string = "hellonuxt"
//   console.log("XDDEFWRGTHYUK<UHTGRFDS")
  const {data}= await useBase("pokemon",{})
  console.log(data.value.results)
</script>

 

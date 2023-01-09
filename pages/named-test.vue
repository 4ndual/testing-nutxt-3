<template>

    <div>
        <h1>
            {{ hello }}
            {{ counter.n }}
        </h1>
        <nuxt-img src="Logo.svg" />
    </div>
</template>
<script setup lang="ts">
// definePageMeta({
//   middleware: ['test2']
// })

import { useCounter } from '~~/store/counter';

const hello: string = "hellonuxt"
// const sameCounter = useState('counter')
const counter=  useCounter()

//   console.log("XDDEFWRGTHYUK<UHTGRFDS")
  const {data}= await useBase("pokemon",{})
//   console.log(data.value.results)
</script>

 
<template>

    <div>
        <h1>
          SECRECT
            {{ counter.n }}
            <!-- {{ sameCounter }} -->
        </h1>
        <nuxt-img src="Logo.svg" />
        <nuxt-link to="/named-test" >
            <button>GO</button>
        </nuxt-link>
        <div>

    <button @click="counter.n++">
      +
    </button>
    <button @click="counter.n--">
      -
    </button>
  </div>
    </div>
</template>
<script setup lang="ts">
// definePageMeta({
//   middleware: ["test"]
//   // or middleware: 'auth'

import { useCounter } from '~~/store/counter';

// })
const counter=  useCounter()

// const counter = useState('counter', () => Math.round(Math.random() * 1000))
// const sameCounter = useState('counter')
// const hello: string = "hellonuxt"
//   console.log("XDDEFWRGTHYUK<UHTGRFDS")
//   const {data}= await useBase("pokemon",{})
//   console.log(data.value.results)
</script>

 

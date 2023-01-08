<template>

    <div class="body">
      <h1>
        {{ hello  }}
      </h1>
      <nuxt-img
    src="Logo.svg"
  
    />
    </div>
  </template>
  <script setup lang="ts">
  
  const hello:string="hellonuxt"
  
  </script>
  <style>
  body{
    background-color: black;
  }
  h1{
    color: aliceblue;
  }
  </style>
  
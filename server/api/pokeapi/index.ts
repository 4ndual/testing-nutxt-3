export default defineEventHandler(async (event) => {
    const pokemon:{[results:string]:any[]} = await $fetch ("https://pokeapi.co/api/v2/pokemon")

    console.log("asking data in the server")
    return  pokemon.results.map((poke:any)=>({name:poke.name}))
})  
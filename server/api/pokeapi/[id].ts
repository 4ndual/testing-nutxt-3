export default defineEventHandler(async ({context}) => {
    const {id} =context.params
    const pokemon = await $fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log("asking data in the server")
    return pokemon
})  
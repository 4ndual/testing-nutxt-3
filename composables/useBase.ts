export const useBase = (request:any, opts:any) => {
    const config = useRuntimeConfig()
    return useFetch(request, { baseURL: "https://pokeapi.co/api/v2/", ...opts })
  }
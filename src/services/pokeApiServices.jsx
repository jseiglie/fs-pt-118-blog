const pokeApiServices = {}
const url = 'https://pokeapi.co/api/v2'


pokeApiServices.getPokemons = async () => {
    try {
        const resp = await fetch(url+'/pokemon')
        if (!resp.ok) throw new Error('error fetching pokemons')
        const data = await resp.json()
    return data
    } catch (error) {
        console.log(error)
    }
}

export default pokeApiServices
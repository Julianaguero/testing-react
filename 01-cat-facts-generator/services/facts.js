const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {

    try {
        const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        //el  error en esta instancia permite detectar si hay un error con la peticion. 
        if (!res.ok) throw new Error('Error fetching facts')
        const data = await res.json()
        const { fact } = data
        return fact
    } catch (err) {
        //vemos si ha habido tanto un error en la peticion como en la respuesta.
        console.log(err)
    }
}

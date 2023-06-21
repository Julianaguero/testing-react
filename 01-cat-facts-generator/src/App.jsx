import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

// creo const con las direcciones de acceso, ya que podemos tener diferentes variables de entorno y facilita su modificacion
const CAT_PREFIX_URL = 'https://cataas.com/'

function App() {

  const [fact, setFact] = useState("this is a random fact")
  const [image, getImage] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])
  // Usamos para recuperar una img cada vez que tenemos una cita nueva
  useEffect(() => {
    // el condicional "si no hay un fact" return es para prevenir un error, porque la primera vez que se renderiza el primer fact es "undefined"  
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        //dejo el prefijo del sitio web por fuera del useEffect para tener la minima informacion en el hook
        getImage(url)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main className=' h-screen flex flex-col aling-center justify-center p-10 max-w-lg mx-auto'>
      <h1 className=' text-3xl font-bold text-center mb-4'>Este es un generador de facts random</h1>
      {fact && <p className='mb-4'>{fact}</p>}
      {image && <img className='object-cover h-96 w-auto   mb-4' src={`${CAT_PREFIX_URL}${image}`} alt={`This is an image showing the first three words of ${fact}`} />}
      <button className='border-slate-950 border-2 bg-amber-300 rounded-md hover:bg-amber-200 w-32 mx-auto inline' onClick={handleClick}> Get new fact </button>
    </main>
  )
}

export default App

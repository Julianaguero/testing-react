import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'


function App() {
  const { fact, refreshFact} = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }



  return (
    <main className='bg-slate-400'>
      <section className='h-screen flex flex-col aling-center justify-center p-10 max-w-lg mx-auto'>
        <h1 className=' text-3xl font-bold  text-center mb-8'>Cat Facts Generator 🐱</h1>
        {fact && <p className='mb-4 '>{fact}</p>}
        {imageUrl && <img
                className='object-cover lg:h-4/6 w-auto mb-4 h-auto'
                src={imageUrl}
                alt={`This is an image showing the first three words of the cat fact`} />
            }
        <button className='border-slate-950 border-2 bg-sky-800 rounded-md hover:bg-sky-600 text-white w-40 mx-auto inline' onClick={handleClick}> Get new fact  🐈</button>
      </section>
    </main>
  )
}

export default App

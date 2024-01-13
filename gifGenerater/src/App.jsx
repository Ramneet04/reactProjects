import Random from './Components/Random'
import Tag from './Components/Tag'
import './App.css'

function App() {

  return (
    <div className='flex flex-col items-center min-h-fit  w-full background'>
      <h1 className='text-center bg-zinc-900 w-[90%] mt-12 py-4 rounded-xl text-3xl font-bold text-emerald-500 italic'>RANDOM GIFS</h1>
      <Random></Random>
      <Tag></Tag>
    </div>
  )
}

export default App

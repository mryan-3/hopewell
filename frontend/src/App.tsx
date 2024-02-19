import Navbar from '../src/components/Navbar.tsx'
import Doctor from './components/Doctor.tsx'
import Hero from './components/Hero.tsx'
function App() {
  return (
    <div className='bg-gradient'>
      <Navbar />
      <Hero />
      <Doctor />
    </div>
  )
}

export default App

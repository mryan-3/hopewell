import Navbar from '../src/components/Navbar.tsx'
import Doctor from './components/Doctor.tsx'
import Hero from './components/Hero.tsx'
import Services from './components/Services.tsx'

function App() {
  return (
    <div className='bg-gradient'>
      <Navbar />
      <Hero />
      <Doctor />
      <Services />
    </div>
  )
}

export default App

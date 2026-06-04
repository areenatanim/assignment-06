import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CardContainer from './components/CardeContainer/CardContainer'
import NavBar from './components/NavBar/NavBar'
import State from './components/States/State'

function App() {
  const cardData = fetch("/data.json").then(rest => rest.json())

  const [cart, setCart] = useState(0);

  return (
    <>
      <header>
        <NavBar cart={cart}></NavBar>
        <Banner></Banner>
      </header>
      <main>
        <State></State>

        <Suspense fallback={<span className="loading loading-ring loading-xl text-center"></span>}>
          <CardContainer cardData={cardData} setCart={setCart} cart={cart}></CardContainer>
        </Suspense>
      </main>
    </>
  )
}

export default App

import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CardContainer from './components/CardeContainer/CardContainer'
import NavBar from './components/NavBar/NavBar'
import State from './components/States/State'
import GetStartMain from './components/GetStart/GetStartMain'
import PriceContainer from './components/PriceMain/PriceContainer'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'

function App() {
  const cardData = fetch("/data.json").then(rest => rest.json());
  const gateStartData = fetch("/getStart.json").then(rest => rest.json());
  const priceData = fetch("/public/priceData.json").then(rest => rest.json());

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

        <section>
          <Suspense fallback={<span className="loading loading-ring loading-xl text-center"></span>}>
            <GetStartMain gateStartData={gateStartData} />
          </Suspense>
        </section>
        <section>
          <Suspense fallback={<span className="loading loading-ring loading-xl text-center"></span>}>
            <PriceContainer priceData={priceData}></PriceContainer>
          </Suspense>
        </section>

        <section>
          <Workflow></Workflow>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App

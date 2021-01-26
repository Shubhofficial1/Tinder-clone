import './App.css'
import Header from './component/Header'
import SwipeButton from './component/SwipeButton'
import TinderCards from './component/TinderCards'

function App() {
  return (
    <div className='app'>
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  )
}

export default App

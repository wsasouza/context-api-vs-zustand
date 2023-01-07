import './App.css'
import { Profile } from './components/Context/Profile'
import { ScoreCard } from './components/Context/ScoreCard'

function App() {
  return (
    <div className="App">
      <h2>Zustand</h2>

      <h2>Context API</h2>
      <Profile />
      <ScoreCard />
    </div>
  )
}

export default App

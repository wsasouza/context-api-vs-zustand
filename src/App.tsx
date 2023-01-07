import './App.css'
import { Profile } from './components/Context/Profile'
import { ScoreCard } from './components/Context/ScoreCard'
import { ProfileZ } from './components/Zustand/ProfileZ'
import { ScoreCardZ } from './components/Zustand/ScoreCardZ'

function App() {
  return (
    <div className="App">
      <h2>Zustand</h2>
      <ProfileZ />
      <ScoreCardZ />

      <h2>Context API</h2>
      <Profile />
      <ScoreCard />
    </div>
  )
}

export default App

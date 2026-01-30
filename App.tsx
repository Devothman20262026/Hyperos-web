import { useState } from 'react'
import LockScreen from './system/LockScreen'
import HomeScreen from './system/HomeScreen'
import RecentApps from './system/RecentApps'

export default function App() {
  const [locked, setLocked] = useState(true)
  const [recent, setRecent] = useState(false)

  return (
    <div className="phone">
      <div className="screen">
        {locked && <LockScreen onUnlock={() => setLocked(false)} />}
        {!locked && !recent && <HomeScreen openRecent={() => setRecent(true)} />}
        {recent && <RecentApps close={() => setRecent(false)} />}
      </div>
    </div>
  )
}
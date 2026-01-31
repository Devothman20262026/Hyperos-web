hereexport default function HomeScreen({ openRecent }: { openRecent: () => void }) {
  return (
    <div className="home">
      <div className="apps">
        <div className="icon">⚙️</div>
        <div className="icon">📝</div>
        <div className="icon">🖼️</div>
      </div>

      <div className="home-bar" onClick={openRecent}></div>
    </div>
  )
}

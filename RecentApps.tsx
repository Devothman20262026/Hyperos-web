export default function RecentApps({ close }: { close: () => void }) {
  return (
    <div className="recent">
      <div className="card">Settings</div>
      <div className="card">Notes</div>
      <div className="card">Gallery</div>

      <button onClick={close}>Back</button>
    </div>
  )
}
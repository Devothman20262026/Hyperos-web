export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  return (
    <div className="lock" onClick={onUnlock}>
      <div className="time">{new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
      <div className="hint">Tap to unlock</div>
    </div>
  )
}
export default function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '32px' }}>
      <h2 style={{ borderBottom: '2px solid #333' }}>{title}</h2>
      {children}
    </section>
  )
}

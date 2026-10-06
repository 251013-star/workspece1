export default function Box({ title, children }) {
  return (
    <section style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

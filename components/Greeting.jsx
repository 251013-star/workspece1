export default function Greeting({ name, emoji = '👋' }) {
    console.log('Greeting を描画:', name)
  return (
    <p>
      {emoji} こんにちは、{name}さん！
    </p>
  )
}


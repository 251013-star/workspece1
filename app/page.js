import ProfileCard from '@/components/ProfileCard'
import Section from '@/components/Selection'

export default function Home() {
  return (
    <main style={{ padding: '24px' }}>
      <Section title="メンバー紹介">
        <div style={{ display: 'flex', gap: '16px' }}>
          <ProfileCard name="太郎" role="プログラマー" hobby="ゲーム" age={20} isLeader={true} color="tomato" />
          <ProfileCard name="花子" role="デザイナー" hobby="イラスト" age={19} />
          <ProfileCard name="次郎" role="エンジニア" hobby="自転車" age={21} />
        </div>
      </Section>
      <Section title="活動内容">
        <p>毎週水曜に集まって、Web アプリを作っています。</p>
      </Section>
    </main>
  )
}

import styles from './page.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <main className={styles.card}>
      <h1>石　石　石　石　石　石　石  </h1>
      <Image src="/20067200.jpg" alt="rock" width={500} height={500} />
    </main>
  )
}
